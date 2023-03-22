import style from "./game.module.css";

export default function Button({ State, onSquareClick }) {
  return (
    <div className={style.Btn} onClick={onSquareClick}>
      {State}
    </div>
  );
}
