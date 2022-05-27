/** @format */

import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./Todoform";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TodoList = ({ todos, onComplate, onDelete, onUpdateTodo }) => {
  const [Edit, setEdit] = useState({ id: null, text: "", isComplete: false });

  const editTodoHandler = (newInput) => {
    onUpdateTodo(Edit.id, newInput);
    setEdit({ id: null, text: "" });
  };

  const renderHandler = () => {
    if (todos.length === 0) return <p>add some todos</p>;
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplate={() => onComplate(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };

  return (
    <div>
      {Edit.id ? (
        <TodoForm sumbitTodoHandler={editTodoHandler} edit={Edit} />
      ) : (
        renderHandler()
      )}
    </div>
  );
};
export default TodoList;
