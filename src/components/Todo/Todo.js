import React from 'react';

export default ({ todo: { isDone, text } }) => {
  if (isDone) return <strike>{text}</strike>;

  return <span>{text}</span>;
};
