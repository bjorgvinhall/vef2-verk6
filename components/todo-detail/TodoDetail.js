import React, { useState } from 'react';
import Button from '../button/button';
import Link from 'next/link';
import Errors from '../errors/Errors';

import css from './todoDetail.css';
import { updateTodo, deleteTodo } from '../../api';

// Stakt verkefni á /:id
export default function todoDetail(props) {
  const { id, todoDetail, refresh } = props;
  const { title, completed, due, updated, created } = todoDetail;
  const [isDeleted, setIsDeleted] = useState(false);
  const [errors, setErrors] = useState([]);
  
  const [data, setData] = useState({ title: title, due: due, completed: completed, updated: updated });

  async function updateHandler(e){
    e.preventDefault();
    setErrors([]);
    const result = await updateTodo(id, data.title, data.due, data.completed);
    if(!result.success) {
      setErrors(result.result)
      return;
    }

    refresh();
  }
  async function deleteHandler(e){
    e.preventDefault();
    await deleteTodo(id);
    setIsDeleted(true);
  }


  function onChangeCompleted(e) {
    setData({
      ...data,
      completed: !data.completed,
    });
  }
  function onChangeTitle(e) {
    setData({
      ...data,
      title: e.target.value,
    });
  }
  function onChangeDue(e) {
    let due = e.target.value;
    if(due.length === 0){
      due = null;
    }
    setData({
      ...data,
      due: due,
    });
  }


  return (
    <React.Fragment>
      {isDeleted && (
        <p>Verkefni eytt</p>    
      )}
      {(errors &&
          <Errors errors={errors}></Errors>
      )}
      {!isDeleted && (
        <React.Fragment>
        <div className={css.todoDetail__list}>
          <legend className={css.todoDetail__term}>Titill:</legend>
          <input type='textarea' 
            className={css.todoDetail__definition} 
            value={data.title} 
            onChange={onChangeTitle}
          ></input>

          <legend className={css.todoDetail__term}>Lokið:</legend>
          <input type="checkbox" 
            className={css.todoDetail__definition}
            checked={data.completed}
            onClick={onChangeCompleted} 
          ></input>

          <legend className={css.todoDetail__term}>Klárast fyrir:</legend>
          <input type='textarea' 
            className={css.todoDetail__definition} 
            value={data.due} 
            onChange={onChangeDue}
          ></input>
        
          <legend className={css.todoDetail__term}>Uppfært:</legend>
          <p className={css.todoDetail__definition}>{updated}</p>

          <legend className={css.todoDetail__term}>Búið til:</legend>
          <p className={css.todoDetail__definition}>{created}</p>
        </div>
        <div className={css.todoDetail__buttons}>
          <Button
            onClick={updateHandler}
            children={'Uppfæra'}
          ></Button>
          <Button
            onClick={deleteHandler}
            children={'Eyða'}
          ></Button>
        </div>
      </React.Fragment>
    )}


      <Link as={`/`} href={`/`}>
        <a className={css.todoDetail__back}> Til baka </a>
      </Link>
    </React.Fragment>
  );
}
