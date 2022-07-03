/* ----------------------------------------- */

// * React Router (Import)

/* ----------------------------------------- */

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

/* ----------------------------------------- */

// * Routes (Pages)

/* ----------------------------------------- */

import Home from "./routes/Home";
import About from "./routes/About";
import Users from "./routes/Users";
import Error404 from "./routes/404";

/* ----------------------------------------- */

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? "brown" : "" };
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? "brown" : "" };
                }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? "brown" : "" };
                }}
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <hr />

        <br />

        {/* Routes */}
        <section className="content">
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/*" element={<Users />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
