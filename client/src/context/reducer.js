import { ADD_TODO } from "./actions";

export const INITIAL_STATE = [];

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, { title: action.payload, done: false }];
    }
    default:
      return state;
  }
};

export default reducer;
