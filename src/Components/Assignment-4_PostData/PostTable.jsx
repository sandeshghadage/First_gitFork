import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./PostTable.module.css";

export default function PostTable() {
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data));
  }, []);

  function handleDelete(index) {
    data.splice(index, 1);
    setData([...data]);
  }

  function ToggleTable() {
    setIsVisible(!isVisible);
    console.log(isVisible);
  }

  return (
    <div className={style.mainBox}>
      <h1>Post Data</h1>
      <div>
        {" "}
        Show posts :
        <input
          type="checkbox"
          checked={isVisible}
          value={isVisible}
          onChange={ToggleTable}
        />
      </div>
      <hr />
      {isVisible && <Table data={data} onClick={handleDelete} />}
    </div>
  );
}

function Table({ data, onClick }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Post</th>
            <th>Delete Post</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td id={style.clrBtn} onClick={() => onClick(index)}>
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
