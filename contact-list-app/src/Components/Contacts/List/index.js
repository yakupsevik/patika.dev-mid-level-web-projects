import { useState } from "react";

function List({ removeContact, contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });

  const deleteContact = (key) => {
    contacts.splice(key, 1);
    setLocalStorage([...contacts]);
    removeContact([...contacts]);
  }

  const setLocalStorage = (contacts) => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, key) => (
          <li key={key}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
            <span className="delete-button" onClick={() => deleteContact(key)}>X</span>
          </li>
        ))}
      </ul>

      <p>Total Contacts ({contacts.length})</p>
    </div >
  );
}

export default List;
