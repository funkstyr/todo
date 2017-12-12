import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import * as actions from '../../actions';

const Todos = ({ todos, toggleTodo, addTodo }) => {
  const renderTodos = todos.map(todo => {
    const id = todo.get('id');

    return (
      <li key={id} className="todo_item" onClick={() => toggleTodo(id)}>
        <Todo todo={todo} />
      </li>
    );
  });

  const submit = ({ target, which }) => {
    const text = target.value;
    const isEnterKey = which === 13;
    const isLongEnough = text.length > 4;

    if (isEnterKey && isLongEnough) {
      target.value = '';
      addTodo(text);
    }
  };

  return (
    <div className="todo">
      <input type="text" placeholder="Add todo" onKeyDown={submit} />
      <ul className="todo_list">{renderTodos}</ul>
    </div>
  );
};

const mapStateToProps = ({ todos }) => {
  return { todos };
};

export default connect(mapStateToProps, actions)(Todos);
