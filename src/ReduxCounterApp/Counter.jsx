import React from "react";
import style from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div className={style.mainBox}>
      <h1>Counter: {counter}</h1>
      <div>
        <button className={style.btn} onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className={style.btn} onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button className={style.btn} onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
