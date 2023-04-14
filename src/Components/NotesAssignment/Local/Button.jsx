import React from "react";
import style from "./../Notes.module.css";

export default function Button({ value, onClick }) {
  return (
    <div id={style.btn} onClick={onClick}>
      {value}
    </div>
  );
}
