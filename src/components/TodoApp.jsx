/** @format */

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./Navbar";
import TodoForm from "./Todoform";
import TodoList from "./TodoList";

const TodoApp = () => {
  //  state for edit todo user
  const [todos, setTodos] = useState([]);
  // save completeTodo
  const [filteredTodos, setFilteredTodos] = useState([]);
  // status state
  const [selectedOption, setSelectedOption] = useState("All");

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

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
    selectedTodo.status = !selectedTodo.isComplete;
    // clone:todos
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    selectedTodo.isComplete
      ? toast.info("your Todo has been completed")
      : toast.info("your Todo has been uncompleted");
  };

  const onDelete = (id) => {
    // findIndex
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    toast.info("your Todo has been delete");
  };

  const updateTodo = (id, newInput) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newInput;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    switch (status) {
      case "Complated":
        setFilteredTodos(todos.filter((t) => t.isComplete));
        break;
      case "Uncomplated":
        setFilteredTodos(todos.filter((t) => t.isComplete === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const selectedHandler = (event) => {
    console.log(event);
    setSelectedOption(event);
    filterTodos(event.value);
  };
  return (
    <div className="container">
      <Navbar
        unComplatedTodos={todos.filter((todo) => !todo.isComplete).length}
        selectedOption={selectedOption}
        onChange={selectedHandler}
      />
      {/* update List */}
      <TodoForm sumbitTodoHandler={addTodoHandler} />
      {/* Map on todo list */}
      <TodoList
        todos={filteredTodos}
        onComplate={completeTodo}
        onDelete={onDelete}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
