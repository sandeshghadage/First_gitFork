import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
          fontSize: "2rem",
        }}
      >
        {seconds}
      </div>
      <Button sx={{ m: 1 }} variant="contained" onClick={handleStart}>
        Start
      </Button>
      <Button sx={{ m: 1 }} variant="contained" onClick={handlePause}>
        Pause
      </Button>
      <Button sx={{ m: 1 }} variant="contained" onClick={handleReset}>
        Reset
      </Button>
    </Box>
  );
}
