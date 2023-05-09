import React from "react";
import style from "./Button.module.css";

export default function Button({ onClick, value }) {
  return (
    <button id={style.button} onClick={onClick}>
      {value}
    </button>
  );
}
