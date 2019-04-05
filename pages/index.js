import React, { useState, useEffect } from 'react';

import Layout from '../components/layout/Layout';
import Todos from '../components/todos/Todos';
import Form from '../components/form/Form';

import { getTodos, updateTodo } from '../api';

function Home(props) {
  const{ initTodos } = props;

  const [data, setData] = useState(initTodos);
  const [loading, setLoading] = useState(false);
  const [hideCompleted, setHideCompleted] = useState(false);

  async function onToggleHidden() {
    setLoading(true);
    const todos = await getTodos(!hideCompleted);
    setData(todos);
    setHideCompleted(!hideCompleted);
    setLoading(false);
  }

  async function refreshTodos(){
    const todos = await getTodos(hideCompleted);
    await setData(todos);
  }

  return (
    <Layout title="Verkefni">
      <Todos
        data={data}
        loading={loading}               // bool
        onToggleHidden={onToggleHidden} // fall
        hideCompleted={hideCompleted}   // bool: false ef birta á allt, true ef á að fela completed
        onChange={refreshTodos}
      ></Todos>
      <Form
        onCreated={refreshTodos}
      ></Form>
    </Layout>
  );
}

Home.getInitialProps = async ({ req }) => {
  const todos = await getTodos();

  return { initTodos: todos }
}

export default Home
