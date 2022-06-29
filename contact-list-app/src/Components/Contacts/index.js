import { useState } from "react";

import "./styles.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
  let contactsFromStorage = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(contactsFromStorage ? contactsFromStorage : []);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List removeContact={setContacts} contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
