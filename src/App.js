import "./App.css";
import { Fragment } from "react";
import { Component1 } from "./components";
import { Component2 } from "./components";
import { Component3 } from "./components";
import { Button1 } from "./components";

function App() {
  return (
    <Fragment>
      <h1>I am heading one... From first componenent</h1>;
      <h2>I am heading two... From second componenent</h2>;
      <h3>I am heading three... From third componenent</h3>;
      <button type="button">Click Me!!</button>
    </Fragment>
  );
}

export default App;
