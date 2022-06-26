/** @format */

import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (event) => {
    setInput(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!input) {
      toast.warning("Please Enter a Todo");
      return;
    }
    props.sumbitTodoHandler(input);
    setInput("");
    toast.success("success Add Todo");
    // add todo user in list
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="input-div">
        <input
          className="input"
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder={props.edit ? "update value..." : "add new value"}
          ref={inputRef}
        />
        <button type="submit" className="button">
          {props.edit ? "update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
