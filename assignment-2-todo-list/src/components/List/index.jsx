import React from "react";

function List({ todos, setTodo, view }) {
  // * Complete Todo
  const completeTodo = (e) => {
    let newTodos = todos.map((todo) => {
      if (parseInt(todo.id) === parseInt(e.target.id)) {
        todo = { ...todo, complete: !todo.complete };
      }
      return todo;
    });

    setLocalStorage(newTodos);
    setTodo(newTodos);
  };

  // * Check todo complete and view props then return className
  const isComplete = (todo) => {
    if (todo.complete === true && view === "All") {
      return "completed";
    } else if (todo.complete === true && view === "Active") {
      return "completed hidden";
    } else if (todo.complete === false && view === "Completed") {
      return "hidden";
    }
  };

  // * Delete Todo from State and Local Storage
  const deleteTodo = (key) => {
    todos.splice(key, 1);
    setLocalStorage([...todos]);
    setTodo([...todos]);
  };

  // * Local Storage Set Item Function
  const setLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} id={todo.id} className={isComplete(todo)}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={todo.complete}
                id={todo.id}
                onClick={completeTodo}
              />
              <label>{todo.todo}</label>
              <button
                className="destroy"
                id={todo.id}
                onClick={deleteTodo}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
