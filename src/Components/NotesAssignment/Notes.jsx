import React, { useState } from "react";
import style from "./Notes.module.css";
import { Routes, Route, Link } from "react-router-dom";
import Button from "./Local/Button";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [noteData, setNoteData] = useState("");
  const [display, setDisplay] = useState(false);
  const [depenent, setDepenent] = useState("a");

  function handleAdd() {
    setDepenent(depenent + "a");
  }

  return (
    <div className={style.notesUi}>
      <div id={style.appName}>NOTES</div>
      <Button value={"+"} style={{ color: "white" }} onClick={handleAdd} />
      {Array.from(depenent).map((x) => (
        <div className={style.noteItem} onClick={() => setDisplay(!display)}>
          Todo
        </div>
      ))}
      {/* <Link to="notebody">notebody</Link> */}

      {/* <Link path="notebody"></Link> */}
      {display && (
        <textarea
          onChange={(e) => setNoteData(e.target.value)}
          value={noteData}
        />
      )}
    </div>
  );
}
