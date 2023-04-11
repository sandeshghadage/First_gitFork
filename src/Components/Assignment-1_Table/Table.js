import React, { useState } from "react";
import style from "./Table.module.css";

export default function Table() {
  const [table, setTable] = useState([]);

  function handleTable() {
    let random = Math.round(Math.random() * 100);
    let t = [];
    for (let i = 1; i <= 10; i++) {
      t.push(random * i);
    }
    setTable(t);
  }

  return (
    <div className={style.table}>
      <button id={style.btn} onClick={handleTable}>
        Change Table
      </button>
      {table.map((x, i) => (
        <div className={style.element} key={i}>
          {x}
        </div>
      ))}
    </div>
  );
}
