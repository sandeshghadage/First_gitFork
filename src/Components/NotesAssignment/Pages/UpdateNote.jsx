import React, { useState } from "react";
import { NoteList } from "../RecoilState";
import { NoteIndex } from "../RecoilState";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export default function UpdateNote() {
  const [noteData, setNoteData] = useRecoilState(NoteList);
  const [noteIndex, setNoteIndex] = useRecoilState(NoteIndex);
  const [tempNote, setTempNote] = useState("");
  const navigate = useNavigate();

  function handleUpdate() {
    const newArr = [...noteData];

    for (let i = 0; i < newArr.length; i++) {
      if (i === noteIndex) {
        newArr[i] = tempNote;
        break;
      }
    }
    setNoteData([...newArr]);
    navigate("/notes");
  }
  console.log(noteData[noteIndex]);
  return (
    <div style={{ color: "red" }}>
      <textarea
        name="postContent"
        onChange={(event) => setTempNote(event.target.value)}
        defaultValue={noteData[noteIndex]}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
