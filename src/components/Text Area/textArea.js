import { useState } from "react";
import "./textArea.css";
export default function TextArea() {
  const [value, setValue] = useState();

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="textArea">
      <textarea maxLength={100} onChange={handleChange}>
        {value}
      </textarea>
      <br />
      {/* <small style={{ color: "red" }}>char</small> */}
    </div>
  );
}
