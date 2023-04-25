import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCounter } from "./ReduxButtonTable/ButtonTableSlice";

function App() {
  const arr = useSelector((state) => state.button.arr);

  const dispatch = useDispatch();

  function handleClick(index) {
    dispatch(increaseCounter(index));
  }
  return (
    <div className="App">
      <table>
        <thead>
          <th>Button</th>
          <th>Action</th>
        </thead>
        <tbody>
          {arr.map((item, index) => (
            <tr>
              <td>
                <button onClick={() => handleClick(index)}>{item.name}</button>
              </td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
