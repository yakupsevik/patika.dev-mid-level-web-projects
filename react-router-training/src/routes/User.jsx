/* ----------------------------------------- */

/* --------------- Imports ----------------- */

/*
 * React Router, useState & useEffect
 * Axios
 */

/* ----------------------------------------- */

import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

/* ----------------------------------------- */

function User() {
  // * loading State
  const [loading, setLoading] = useState(true);

  // * user State
  const [user, setUser] = useState({});

  // * id & parseInt
  const { id } = useParams();
  const integerId = parseInt(id);

  //* Make a (GET) Request for User data from Fake API with using Axios

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      // * Response is User data
      .then((res) => setUser(res.data))
      // * Change the loading boolean value when (GET) Request is done
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>

      {/* Loading */}
      {loading && <div>Loading...</div>}

      {/* User Details */}
      {!loading && (
        <ul>
          <li>
            <b>Name:</b> {user.name}
          </li>
          <li>
            <b>Username:</b> {user.username}
          </li>
          <li>
            <b>E-mail:</b> {user.email}
          </li>
          <li>
            <b>Phone Number:</b> {user.phone}
          </li>
        </ul>
      )}

      <br />

      {/* Next & Previous Page Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "15px",
        }}
      >
        {integerId > 1 && (
          <NavLink to={`/users/${id - 1}`}>
            Previous User ({integerId - 1})
          </NavLink>
        )}
        {integerId < 10 && (
          <NavLink to={`/users/${integerId + 1}`}>
            Next User ({integerId + 1})
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default User;
