import React from 'react';

export default ({ todo }) => {
  if (todo.get('isDone')) return <strike>{todo.get('text')}</strike>;

  return <span>{todo.get('text')}</span>;
};
