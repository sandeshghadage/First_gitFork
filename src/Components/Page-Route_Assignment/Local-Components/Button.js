import style from "./../CommonCss.module.css";

export default function ButtonSumbit({ BtnName, onClick }) {
  return (
    <button className={style.ButtonSumbit} onClick={onClick}>
      {BtnName}
    </button>
  );
}
