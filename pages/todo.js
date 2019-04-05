import React, { useState, useEffect } from 'react';
import Error from 'next/error';

import Layout from '../components/layout/Layout';
import TodoDetail from '../components/todo-detail/TodoDetail';

import { getTodo } from '../api';



function Home(props) {
  const { id, todoDetail } = props;
  const [data, setData] = useState(todoDetail);
  
  async function refreshTodo(){
    const newDetail = await getTodo(id);
    setData(newDetail);
  }

  return (
    <Layout title={data.title}>
      <TodoDetail
        id={id}
        todoDetail={data}         // details
        refresh={refreshTodo}     // fall
      ></TodoDetail>
    </Layout>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { id } = query;

  const todoDetail = await getTodo(id);

  return {
    id,
    todoDetail,
  };
}

export default Home
