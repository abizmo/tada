import React, { useContext } from "react";

import { Context } from "../../context";

const TodoList = () => {
  const { state: todos } = useContext(Context);

  return (
    <div
      style={{
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.4)",
        borderRadius: "2px"
      }}
    >
      {todos.map(({ title, done }) => (
        <div
          key={title}
          style={{
            borderBottom: "1px solid #cccccc",
            display: "flex",
            justifyContent: "space-between",
            padding: "4px 16px",
            marginBottom: "9px"
          }}
        >
          <div>{title}</div>
          <div>{done ? "T" : "F"}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
