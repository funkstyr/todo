import { List, Map } from 'immutable';
import { ADD_TODO, TOGGLE_TODO } from '../actions/types';

const init = List([
  Map({ id: 0, isDone: true, text: 'make components' }),
  Map({ id: 1, isDone: false, text: 'design actions' }),
  Map({ id: 2, isDone: false, text: 'implement reducer' }),
  Map({ id: 3, isDone: false, text: 'connect components' })
]);

export default (todos = init, action) => {
  switch (action.type) {
    case ADD_TODO:
      return todos.push(Map(action.payload));
    case TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.get('id') === action.payload)
          return todo.update('isDone', isDone => !isDone);

        return todo;
      });
    default:
      return todos;
  }
};
