import React, { useState } from "react";

export default function TaskUI(props) {
  const [notComplete, setComplete] = useState(false);

  return (
    <div id="taskCard">
      <div
        id="taskName"
        style={notComplete ? { textDecoration: "line-through" } : {}}
      >
        {props.item}
      </div>
      <button id="completeBtn" onClick={() => setComplete(true)}>
        Complete
      </button>
      <button id="deleteBtn" onClick={() => props.delete(props.index)}>
        X
      </button>
    </div>
  );
}
