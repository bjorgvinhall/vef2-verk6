import React, { useState } from 'react';

import Link from 'next/link';

import css from './TodoItem.css';

import { updateTodo } from '../../api';

// Verkefni í lista á forsíðu
export default function todoItem(props) {
  const { id, title, due, completed, onChange } = props;

  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onCheck(){
    setLoading(true);
    await updateTodo(id, title, due, !completed);
    setChecked(!checked)
    await onChange();
    setLoading(false);
  }

  return (
    <div className={css.item}>
      {loading && (
        <p>Uppfæri</p>    
      )}
      {!loading && (
        <React.Fragment>
          <input type="checkbox" 
            className={css.item__input}
            checked={completed}
            onClick={onCheck} 
          ></input>
          <Link as={`/todo/${id}`} href={`/todo?id=${id}`}>
            <a className={css.item__link}> {title} </a>
          </Link>
          {due != null && (
            <span className={css.item__due}> Klára fyrir {due} </span>
          )}
        </React.Fragment>
      )}
    </div>
  );
}
