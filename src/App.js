import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import style from "./Components/RouterAssignment/Router.module.css";
import Notes from "./Components/NotesAssignment/Pages/Notes";
import CreateNote from "./Components/NotesAssignment/Pages/CreateNote";
import UpdateNote from "./Components/NotesAssignment/Pages/UpdateNote";

function App() {
  return (
    <>
      <header>
        <ul id={style.navbar}>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="" element={<h1>This is Home Page</h1>}></Route>
        <Route path="/contact" element={<h1>This is Contact Page</h1>}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/createnote" element={<CreateNote />}></Route>
        <Route path="/updatenote" element={<UpdateNote />}></Route>
      </Routes>
    </>
  );
}

export default App;
