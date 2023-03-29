import styles from "./greet.module.css";

export function Greet(props) {
  return (
    <div className={styles.container}>
      <h1>Congratulation on passing the test</h1>
      <h4>You got {props.total} out of 20 marks</h4>
    </div>
  );
}
