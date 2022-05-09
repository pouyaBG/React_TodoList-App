/** @format */

import { useState } from "react";
import TodoForm from "./Todoform";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    // find index
    const index = todos.findIndex((todo) => todo.id === id);
    // do not mutate
    const selectedTodo = { ...todos[index] };
    selectedTodo.isComplete = !selectedTodo.isComplete;
    // clone:todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    console.log(updatedTodos);
  };

  const onDelete = (id) => {
    // findIndex
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const onEdit = (elements) => {
    console.log(elements);
  };

  return (
    <div className="container">
      {/* update List */}
      <TodoForm addTodoHandler={addTodoHandler} />
      {/* Map on todo list */}
      <TodoList
        todos={todos}
        onComplate={completeTodo}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
};

export default TodoApp;
