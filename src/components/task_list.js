import React, { useState } from "react";
import "./task.css";
import TaskUI from "./task_UI";

export function TaskList() {
  const [arr, setArr] = useState(["Complete Assignment"]);
  const [todo, setTodo] = useState("");
  const [taskCount, setTaskCount] = useState(1);

  function TaskHandler() {
    setArr([...arr, todo]);
    setTodo("");
    setTaskCount(taskCount + 1);
  }

  function capture(e) {
    setTodo(e.target.value);
  }

  function DeleteTask(index) {
    const x = arr.splice(index, 1);
    setArr([...arr]);
    setTaskCount(taskCount - 1);
  }

  return (
    <div id="taskHandlerBox">
      <div id="taskListUi">
        <div id="UIContainer">
          <ul id="taskContainer">
            <h1 style={{ color: "white" }}>Pending Tasks ({taskCount})</h1>
            {arr.map((item, index) => {
              return (
                <p>
                  {<TaskUI item={item} delete={DeleteTask} index={index} />}
                </p>
              );
            })}
          </ul>
          <input id="taskInput" type="text" value={todo} onChange={capture} />
          <button id="addTaskBtn" onClick={TaskHandler}>
            Add
          </button>
        </div>
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
