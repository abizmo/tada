import React, { createContext, useReducer } from "react";

import reducer, { INITIAL_STATE } from "./reducer";

export const Context = createContext();

export default props => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
