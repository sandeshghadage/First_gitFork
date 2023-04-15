import React from "react";
import style from "./../Pages/Notes.module.css";

export default function Button({ value, onClick }) {
  return (
    <div id={style.btn} onClick={onClick}>
      {value}
    </div>
  );
}
