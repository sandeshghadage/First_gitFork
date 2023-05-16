import React, { useState } from "react";
import style from "./TempControl.module.css";

export default function TempControl() {
  const [temp, setTemp] = useState(20);
  return (
    <div className={style.controller__page}>
      <div className={style.main__container}>
        <div
          className={`${style.temp_circle} ${
            temp <= 30 ? style.yellow : temp <= 50 ? style.orange : style.red
          }`}
        >
          {temp}
        </div>
        <div className={style.btns}>
          <div className={style.controlBtn} onClick={() => setTemp(temp + 1)}>
            +
          </div>
          <div className={style.controlBtn} onClick={() => setTemp(temp - 1)}>
            -
          </div>
        </div>
      </div>
    </div>
  );
}
