import React from "react";
import style from "./../Form.module.css";

export default function InputBox({ hint, name, type, onChange }) {
  return (
    <input
      className={style.input}
      placeholder={hint}
      name={name}
      type={type}
      onChange={onChange}
    />
  );
}
