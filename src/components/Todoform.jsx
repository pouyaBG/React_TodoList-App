/** @format */

import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const changeHandler = (event) => {
    setInput(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!input) {
      alert("please fill todo input");
      return;
    }
    props.addTodoHandler(input);
    setInput("");
    // add todo user in list
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={input} onChange={changeHandler}></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
