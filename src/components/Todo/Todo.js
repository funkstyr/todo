import React from 'react';

export default ({ todo }) => {
  const text = todo.get('text');

  if (todo.get('isDone')) return <strike>{text}</strike>;

  return <span>{text}</span>;
};
