/* ----------------------------------------- */

/* --------------- Imports ----------------- */

/*
 * React Router, useState & useEffect
 * Axios, User Route (Page)
 */

/* ----------------------------------------- */

import { Outlet, Routes, Route, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

/* ----------------------------------------- */

function Users() {
  // * loading State
  const [loading, setLoading] = useState(true);

  // * users State
  const [users, setUsers] = useState([]);

  //* Make a (GET) Request for Users data from Fake API with using Axios
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      // * Response is Users data
      .then((res) => setUsers(res.data))
      // * Change the loading boolean value when (GET) Request is done
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {/* Loading */}
      {loading && <div>Loading...</div>}

      {/* Users */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "brown" : "" };
              }}
              to={`/users/${user.id}`}
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />

      {/* Route for go to User id */}
      <Routes>
        <Route exact path="/" element={<h3>Please select a user.</h3>} />
        <Route path="/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default Users;
