import React from 'react';

import css from './Todos.css';
import Button from '../../components/button/button';
import TodoItem from '../../components/todo-item/TodoItem';

// Listi af verkefnum á forsíðu
export default function Todos(props) {
  const { data, loading, onToggleHidden, hideCompleted, onChange } = props;
  function change(){
    onChange();
  }

  return (
    <React.Fragment>
        <Button 
          onClick={onToggleHidden} 
          children={hideCompleted ? 'Sýna allt' : 'Fela búið'}>
        </Button>
    
      <div className={css.todos}>
        {loading && (
          (<p>Hleð gögnum...</p>)
        )}
        {!loading && (
          <React.Fragment>
            {data.map((item, i) => (
              <TodoItem
                id={item.id}
                title={item.title}
                due={item.due}
                completed={item.completed}
                onChange={change}
              ></TodoItem>
            ))}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}
