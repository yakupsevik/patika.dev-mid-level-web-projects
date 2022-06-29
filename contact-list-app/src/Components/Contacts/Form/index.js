import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    setLocalStorage([...contacts, form]);
    addContact([...contacts, form]);
  };

  const setLocalStorage = (contacts) => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <div>
          <input
            name="fullname"
            type="text"
            placeholder="Full Name"
            maxLength={15}
            value={form.fullname}
            onChange={onChangeInput}
          />
        </div>

        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            maxLength={12}
            type="tel"
            value={form.phone_number}
            onChange={onChangeInput}
          />
        </div>

        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;
