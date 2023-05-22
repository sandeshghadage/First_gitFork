import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Task from "./pages/Task";

function App() {
  return (
    <>
      <nav className="navBar">
        <ul className="navList">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="link" to="/task">
              Task
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </>
  );
}

export default App;
