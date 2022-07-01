import { useState } from "react";

import Form from "../components/Form";
import List from "../components/List";
import Footer from "../components/Footer";

function TodoList() {
  const todosFromStorage = JSON.parse(localStorage.getItem("todos")) || [];

  // * Todos State
  const [todos, setTodos] = useState(todosFromStorage);

  // * view State
  const [view, setView] = useState("All");

  return (
    <div className="todoapp">
      <Form todos={todos} setTodo={setTodos} />
      <List todos={todos} setTodo={setTodos} view={view} />
      <Footer todos={todos} setTodo={setTodos} setView={setView} />
    </div>
  );
}

export default TodoList;
