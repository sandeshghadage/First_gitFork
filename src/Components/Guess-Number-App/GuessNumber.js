import style from "./GuessNumber.module.css";
import React, { useState } from "react";

export default function GuessNumberUi() {
  const [ranNum, setRanNum] = useState(Math.round(Math.random() * 49 + 1));
  const [num, setNum] = useState();
  const [ans, setAns] = useState("");
  const [count, setCount] = useState(0);

  function handleClick() {
    if (num > ranNum) {
      alert("you guessed a bigger number");
    }
    if (num < ranNum) {
      alert("you guessed a smaller number ");
    }
    if (num == ranNum) {
      setAns(
        `congratulations you guessed the right number in
        ${count}
        attempts`
      );
    }
    setCount(count + 1);
  }

  function handleChange(e) {
    setNum(e.target.value);
  }

  return (
    <div className={style.mainContainer}>
      <h2>Guess Number between 1-50</h2>
      <p>{ans}</p>
      <input
        className={style.input}
        type="Number"
        placeholder="Guess lucky number..."
        onChange={handleChange}
        value={num}
      ></input>
      <input
        className={style.submit}
        type="submit"
        value="Match Number"
        onClick={handleClick}
      ></input>
    </div>
  );
}
