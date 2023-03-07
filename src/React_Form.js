import { Fragment } from "react";

export function Compo1(Props) {
  return <h1>{Props.heading}</h1>;
}

export function Compo2() {
  return (
    <Fragment>
      <input type="text" placeholder="Mobile..." />
      <br />
      <input type="text" placeholder="Password..." />
      <div className="divider" />
    </Fragment>
  );
}

export function Compo3(Props) {
  return <button>{Props.btnName}</button>;
}
