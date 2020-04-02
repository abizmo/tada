import React, { useContext, useState } from "react";

import { Context } from "../../context";
import { ADD_TODO } from "../../context/actions";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(Context);

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: input
    });
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "40px",
        width: "100%",
        backgroundColor: "red"
      }}
    >
      <input
        type="text"
        placeholder="New todo..."
        value={input}
        onChange={evt => setInput(evt.target.value)}
        style={{
          width: "100%"
        }}
      />
    </form>
  );
};
export default AddTodo;
