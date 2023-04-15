import React, { useState } from "react";
import { NoteList } from "../RecoilState";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export default function CreateNote() {
  const [noteData, setNoteData] = useRecoilState(NoteList);
  const [tempNote, setTempNote] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    let x = [...noteData];
    x.push(tempNote);
    setNoteData([...x]);
    navigate("/notes");
    // console.log(noteData);
  }

  return (
    <div>
      <textarea
        onChange={(e) => setTempNote(e.target.value)}
        //
        value={tempNote}
      />
      <button onClick={handleSubmit}>Done</button>
    </div>
  );
}
