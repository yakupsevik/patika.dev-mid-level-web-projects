import { useState, useEffect } from "react";

const initialFormValues = {
  id: 0,
  todo: "",
  complete: false,
};

function Form({ todos, setTodo }) {
  // * Form State
  const [form, setForm] = useState(initialFormValues);

  // * Execute setForm function when todos state changes.
  useEffect(() => {
    setForm(initialFormValues);
  }, [todos]);

  // * Form Input onChange Function
  const onChangeInput = (e) => {
    setForm({ ...form, todo: e.target.value });
  };

  // * Form onSubmit Function
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.todo === "") return false;

    // * Form ID
    form.id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

    setLocalStorage([...todos, form]);
    setTodo([...todos, form]);
  };

  // * Local Storage Set Item Function
  const setLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={form.todo}
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
}

export default Form;
