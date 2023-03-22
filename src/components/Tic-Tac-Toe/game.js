import style from "./game.module.css";
import Button from "./GameButton";
import { useState } from "react";
import StartAgainBtn from "./StartAgainBtn";

export default function GameUi() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is: " + winner;
  } else {
    status = "Next player is: " + (xIsNext ? "X" : "O");
  }

  function resetGame() {
    const newArr = new Array(9).fill(null);
    setSquares(newArr);
    console.log(newArr);
  }

  return (
    <div className={style.mainBox}>
      <div className={style.status}>
        {status}
        {winner ? <StartAgainBtn btnClick={() => resetGame()} /> : ""}
      </div>
      <div className={style.gameContainer}>
        <div className={style.btnRow}>
          <Button State={squares[0]} onSquareClick={() => handleClick(0)} />
          <Button State={squares[1]} onSquareClick={() => handleClick(1)} />
          <Button State={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className={style.btnRow}>
          <Button State={squares[3]} onSquareClick={() => handleClick(3)} />
          <Button State={squares[4]} onSquareClick={() => handleClick(4)} />
          <Button State={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className={style.btnRow}>
          <Button State={squares[6]} onSquareClick={() => handleClick(6)} />
          <Button State={squares[7]} onSquareClick={() => handleClick(7)} />
          <Button State={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
