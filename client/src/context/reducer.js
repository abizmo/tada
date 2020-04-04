import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actions";

export const INITIAL_STATE = [];

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const id = state.length + 1;
      return [...state, { title: action.payload, done: false, id }];
    }
    case TOGGLE_TODO: {
      const index = state.findIndex(todo => todo.id === action.payload);
      const todo = state.splice(index, 1)[0];
      const updatedTodo = { ...todo, done: !todo.done };

      if (updatedTodo.done) return [...state, updatedTodo];
      else return [updatedTodo, ...state];
    }
    case DELETE_TODO: {
      return state.filter(todo => todo.id !== action.payload);
    }
    default:
      return state;
  }
};

export default reducer;
