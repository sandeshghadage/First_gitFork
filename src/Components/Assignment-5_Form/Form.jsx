import React, { useState } from "react";
import style from "./Form.module.css";
import InputBox from "./Local_Components/InputBox";
import SubmitBtn from "./Local_Components/SubmitBtn";

export default function Form() {
  const [data, setData] = useState([]);
  const [textArea, setTextArea] = useState("");
  const [details, setDetails] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setDetails({ ...details });
    let x = [...data];
    x.push(details);
    setData([...x]);
    setDetails({
      name: "",
      email: "",
      mobile: "",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setDetails((prevValues) => {
      return { ...prevValues, [name]: value };
    });
    setTextArea(value);
  }

  const handleDelete = (index) => {
    const lst = [...data];
    lst.splice(index, 1);
    setData([...lst]);
  };

  const handleUpdate = (index) => {
    // let c = data.indexOf({ email: "sandeshghadage3@gmail.com" });
    // let userIndex = data.find((x) => x.indexOf() === index);
    console.log(data[index]);
    setDetails(data[index]);
  };

  return (
    <div className={style.FormContainer}>
      <div className={style.upperBox}>
        <form className={style.formBody} onSubmit={handleSubmit}>
          <InputBox
            hint={"Name"}
            name={"name"}
            type={"text"}
            onChange={handleChange}
          />
          <InputBox
            hint={"Email"}
            name={"email"}
            type={"email"}
            onChange={handleChange}
          />
          <InputBox
            hint={"Mobile"}
            name={"mobile"}
            type={"Number"}
            onChange={handleChange}
          />
          <SubmitBtn />
        </form>
        <div className={style.follower}>
          <textarea name={"textArea"} value={textArea} />
        </div>
      </div>
      <div className={style.lowerBox}>
        <table>
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.mobile}</td>
                <td id={style.updateBtn} onClick={() => handleUpdate(i)}>
                  update
                </td>
                <td id={style.delBtn} onClick={() => handleDelete(i)}>
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
