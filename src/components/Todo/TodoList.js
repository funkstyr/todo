import React from 'react';

import Todo from './Todo';

const dummyTodos = [
  { id: 0, isDone: true, text: 'make components' },
  { id: 1, isDone: false, text: 'design actions' },
  { id: 2, isDone: false, text: 'implement reducer' },
  { id: 3, isDone: false, text: 'connect components' }
];

export default ({ todos }) => {
  const render = dummyTodos.map(todo => {
    return (
      <li key={todo.id} className="todo_item">
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
