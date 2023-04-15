import React from "react";
import { useRecoilState } from "recoil";
import { NoteList } from "../RecoilState";
import { NoteIndex } from "../RecoilState";
import style from "./Notes.module.css";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

export default function Notes() {
  const [noteData, setNoteData] = useRecoilState(NoteList);
  const [noteIndex, setNoteIndex] = useRecoilState(NoteIndex);

  function handleDelete(i) {
    let updated = noteData.filter((x, index) => index !== i);
    setNoteData([...updated]);
  }

  return (
    <div className={style.notesUi}>
      <div id={style.appName}>NOTES</div>

      <Link className={style.btn} to="/createnote">
        <Button value={"+"} style={{ color: "white" }} />
      </Link>
      {noteData.map((x, i) => (
        <div className={style.item}>
          <Link className={style.noteItem} to="/updatenote">
            <div onClick={(i) => setNoteIndex(i)}>Todo</div>{" "}
          </Link>
          <button id={style.delBtn} onClick={() => handleDelete(i)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
