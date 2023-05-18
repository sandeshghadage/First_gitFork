import React, { useState } from "react";
import style from "./Counter.module.css";
import {
  VscTriangleDown,
  VscTriangleLeft,
  VscTriangleRight,
  VscTriangleUp,
} from "react-icons/vsc";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className={style.counter__page}>
      <div className={style.mainBox}>
        <div>
          <VscTriangleUp
            className={style.arrowIcon}
            onClick={() => setCounter(counter + 1)}
          />
        </div>
        <div className={style.middleRow}>
          <VscTriangleLeft
            className={style.arrowIcon}
            onClick={() => setCounter(counter - 10)}
          />
          <div className={style.counterBox}>{counter}</div>
          <VscTriangleRight
            className={style.arrowIcon}
            onClick={() => setCounter(counter + 10)}
          />
        </div>
        <div>
          <VscTriangleDown
            className={style.arrowIcon}
            onClick={() => setCounter(counter - 1)}
          />
        </div>
      </div>
    </div>
  );
}
