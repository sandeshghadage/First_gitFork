import "./App.css";
import { Fragment } from "react";
import { Compo1 } from "./React_Form";
import { Compo2 } from "./React_Form";
import { Compo3 } from "./React_Form";

function App() {
  return (
    <Fragment>
      <div id="container">
        {/* <Compo1 heading="Register here ..." />
        <Compo2 />
        <Compo3 btnName="Submit" /> */}

        <h1>Register here ...</h1>
        <input type="text" placeholder="Mobile..." />
        <div className="divider" />
        <br />
        <input type="text" placeholder="Password..." />
        <div className="divider" />
        <br />
        <button>Submit</button>
      </div>
    </Fragment>
  );
}

export default App;
