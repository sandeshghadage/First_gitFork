import React, { useState } from "react";
import style from "./HoverUi.module.css";

export default function HoverUi() {
  const [data, setData] = useState([]);

  function handleEventH1(event) {
    if (event.type === "mouseenter") {
      setData([
        ...data,
        { time: new Date().toLocaleString(), eventname: "In", tagName: "H1" },
      ]);
    } else if (event.type === "mouseleave") {
      setData([
        ...data,
        { time: new Date().toLocaleString(), eventname: "Out", tagName: "H1" },
      ]);
    }
  }

  function handleEventH2(event) {
    if (event.type === "mouseenter") {
      setData([
        ...data,
        { time: new Date().toLocaleString(), eventname: "In", tagName: "H2" },
      ]);
    } else if (event.type === "mouseleave") {
      setData([
        ...data,
        { time: new Date().toLocaleString(), eventname: "Out", tagName: "H2" },
      ]);
    }
  }

  function handleEventDiv(event) {
    if (event.type === "mouseenter") {
      setData([
        ...data,
        { time: new Date().toLocaleString(), eventname: "In", tagName: "Div" },
      ]);
    } else if (event.type === "mouseleave") {
      setData([
        ...data,
        { time: new Date().toLocaleString(), eventname: "Out", tagName: "Div" },
      ]);
    }
  }

  return (
    <div className={style.mainBox}>
      <div className={style.tags}>
        <h1 onMouseEnter={handleEventH1} onMouseLeave={handleEventH1}>
          H1 TAG
        </h1>
        <h2 onMouseEnter={handleEventH2} onMouseLeave={handleEventH2}>
          H2 TAG
        </h2>

        <div onMouseEnter={handleEventDiv} onMouseLeave={handleEventDiv}>
          DIV TAG
        </div>
      </div>

      <table>
        <thead>
          <th>TIME</th>
          <th>EVENT</th>
          <th>TAG</th>
        </thead>
        <tbody className={style.tableData}>
          {data.map((x) => (
            <tr>
              <td>{x.time}</td>
              <td>{x.eventname}</td>
              <td>{x.tagName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
