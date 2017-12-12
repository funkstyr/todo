import { ADD_TODO, TOGGLE_TODO } from './types';

const uid = () =>
  Math.random()
    .toString(34)
    .slice(2);

export const addTodo = text => async dispatch => {
  const payload = {
    id: uid(),
    isDone: false,
    text: text
  };

  dispatch({ type: ADD_TODO, payload });
};

export const toggleTodo = id => async dispatch => {
  dispatch({ type: TOGGLE_TODO, payload: id });
};
