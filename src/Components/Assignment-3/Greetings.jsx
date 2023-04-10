import { useState } from "react"
import React from 'react'
import style from "./Greetings.module.css"

export default function Greetings() {
    const Greeting = ["Hello", "Hi", "welcome"];
    const [index, setIndex] = useState(0);

    function handleClick (){
        if(index >= Greeting.length-1){
            setIndex(0)
        } else {
            setIndex(index + 1);
        }
    }
  return (
    <div className={style.mainBox}>
        <h1>{Greeting[index]}</h1>
        <button id={style.btn} onClick={handleClick}>Change Greeting</button>
    </div>
  )
}
