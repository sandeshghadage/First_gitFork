import style from "./game.module.css";
export default function StartAgainBtn({ btnClick }) {
  return (
    <button className={style.startAgain} onClick={btnClick}>
      Start Again
    </button>
  );
}
