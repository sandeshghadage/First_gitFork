import "./App.css";
import React, { useState, useEffect } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

function App() {
  const [rem, setRem] = useState(0);
  const [pixel, setPixel] = useState(0);

  useEffect(() => {
    setPixel(rem * 16);
  }, [rem]);

  useEffect(() => {
    setRem(pixel / 16);
  }, [pixel]);

  return (
    <div className="mainBox">
      <h2>PX to REM converter</h2>
      <div className="inputPanel">
        <div className="inputWithLabel">
          <div>Pixel</div>
          <input
            id="pxlInput"
            onChange={(e) => setPixel(e.target.value)}
            value={pixel}
          ></input>
        </div>
        <HiOutlineSwitchHorizontal style={{ alignSelf: "center" }} />
        <div className="inputWithLabel">
          <div>REM</div>
          <input
            id="remInput"
            onChange={(e) => setRem(e.target.value)}
            value={rem}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default App;
