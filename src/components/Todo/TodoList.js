import React from 'react';
import { List, Map } from 'immutable';

import Todo from './Todo';

const dummyTodos = List([
  Map({ id: 0, isDone: true, text: 'make components' }),
  Map({ id: 1, isDone: false, text: 'design actions' }),
  Map({ id: 2, isDone: false, text: 'implement reducer' }),
  Map({ id: 3, isDone: false, text: 'connect components' })
]);

export default () => {
  const render = dummyTodos.map(todo => {
    return (
      <li key={todo.get('id')} className="todo_item">
        <Todo todo={todo} />
      </li>
    );
  });

  return (
    <div className="todo">
      <input type="text" placeholder="Add todo" />
      <ul className="todo_list">{render}</ul>
    </div>
  );
};
