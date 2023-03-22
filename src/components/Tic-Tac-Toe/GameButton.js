import style from "./game.module.css";
import { useState } from "react";

export default function Button({ State, onSquareClick }) {
  return (
    <div className={style.Btn} onClick={onSquareClick}>
      {State}
    </div>
  );
}
