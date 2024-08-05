import React, { useEffect, useState } from "react";

const Stop = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setTime((time) => time + 1);
      }, 1000);
      console.log("The current time is ",{time})
    } 

  }, [isActive,time]);

  const handleStart = () => {
    setIsActive(true);
    console.log("Timer is start")
  };

  const handleStop = () => {
    setIsActive(false);
    console.log("timer is stop")
  };

  const handleReset = () => {
    setTime(0);
    setIsActive(false);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Current Time is {time}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stop;
