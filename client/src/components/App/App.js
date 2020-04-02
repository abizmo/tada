import React from "react";

import AddTodo from "../AddTodo";
import TodoList from "../TodoList";

const App = () => {
  return (
    <main
      style={{
        width: "800px",
        margin: "0 auto"
      }}
    >
      <AddTodo />
      <TodoList />
    </main>
  );
};

export default App;
