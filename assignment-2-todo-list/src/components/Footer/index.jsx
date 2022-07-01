import React from "react";

function Footer({ todos, setTodo, setView }) {
  // * View Filter Selection
  const selectedButton = (e) => {
    switch (e.target.id) {
      case "All":
        setView("All");
        break;
      case "Active":
        setView("Active");
        break;
      case "Completed":
        setView("Completed");
        break;
      default:
    }
  };

  // * unCompleted Todos Filter
  const unCompleted = todos.filter((todo) => todo.complete === false);

  // * Clear Completed Todos
  const clearCompleted = () => {
    setTodo(unCompleted);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{unCompleted.length}</strong>
        {unCompleted.length > 1 ? " items left" : " item left"}
      </span>

      <ul className="filters">
        <li>
          <a href="/#" id="All" onClick={selectedButton}>
            All
          </a>
        </li>
        <li>
          <a href="/#" id="Active" onClick={selectedButton}>
            Active
          </a>
        </li>
        <li>
          <a href="/#" id="Completed" onClick={selectedButton}>
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
