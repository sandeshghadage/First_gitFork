import React, { useState } from "react";

export function TaskList() {
  //   const [work, setWork] = useState("");
  //   const totalTasks = []; //data

  const [arr, setArr] = useState([]);
  const [todo, setTodo] = useState("");

  function TaskHandler() {
    setArr([...arr, todo]);
    setTodo("");

    // let taskInput = document.getElementById("taskInput").value;
    // // totalTasks.push(inp);
    // // setWork(totalTasks.push(inp));
    // let taskContainer = document.getElementById("taskContainer"); // list

    // let li = document.createElement("li");
    // li.textContent = taskInput;
    // let pos = taskContainer.firstElementChild;
    // if (pos == null) {
    //   taskContainer.appendChild(li);
    // } else {
    //   taskContainer.insertBefore(li, pos);
    // }
  }

  function capture(e) {
    setTodo(e.target.value);
  }

  return (
    <div id="taskHandlerBox">
      <div id="taskListUi">
        <input id="taskInput" type="text" value={todo} onChange={capture} />
        <button onClick={TaskHandler}>Add</button>
        <ul id="taskContainer">
          {arr.map((item) => {
            return <p>{item}</p>;
          })}
          ;
        </ul>
        <br />
      </div>
    </div>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);

  function IncrementHandle() {
    setCount(count + 1);
  }

  function DecrementHandle() {
    setCount(count - 1);
  }

  return (
    <div id="CounterBox">
      <div id="counter">{count}</div>
      <button id="incrementBtn" onClick={IncrementHandle}>
        Increase Count
      </button>
      <button id="decrementBtn" onClick={DecrementHandle}>
        Decrease Count
      </button>
    </div>
  );
}

export function ChangeName() {
  const [name, setName] = useState("Amit");

  function NameHandler() {
    setName(!name);
  }
  return (
    <div id="ChangeNameBox">
      <h1>My name is {name ? "Amit" : "Rajan"}</h1>
      <button id="changeName" onClick={NameHandler}>
        Change Name
      </button>
    </div>
  );
}
