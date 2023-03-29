import "./Button.css";
export function Button(props) {
  return (
    <button onClick={props.func} className={props.class}>
      {props.text}
    </button>
  );
}
