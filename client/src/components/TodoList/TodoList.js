import React, { useContext } from "react";
import {
  CheckBoxOutlineBlankOutlined,
  CheckBoxOutlined
} from "@material-ui/icons";

import { Context } from "../../context";
import { TOGGLE_TODO } from "../../context/actions";

const TodoList = () => {
  const { state: todos, dispatch } = useContext(Context);

  return (
    <div
      style={{
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.4)",
        borderRadius: "2px"
      }}
    >
      {todos.map(({ id, title, done }) => (
        <div
          key={id}
          style={{
            borderBottom: "1px solid #cccccc",
            display: "flex",
            justifyContent: "space-between",
            padding: "4px 16px",
            marginBottom: "9px"
          }}
        >
          <div>{title}</div>
          <button
            onClick={() =>
              dispatch({
                type: TOGGLE_TODO,
                payload: id
              })
            }
          >
            {done ? <CheckBoxOutlined /> : <CheckBoxOutlineBlankOutlined />}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
