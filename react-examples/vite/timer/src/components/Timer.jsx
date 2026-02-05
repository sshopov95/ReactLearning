import { useState, useRef, useEffect } from "react";
import TimerControlls from "./TimerControlls";
import TimerDisplay from "./TimerDisplay";

const Timer = () => {
  const timeRef = useRef(null);

  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem("time")) || 0;
  });
  const [isRunning, setIsRuning] = useState(false);
  useEffect(() => {
    localStorage.setItem("time", String(time));
  }, [time]);
  const toggleTimer = () => {
    if (!isRunning) {
      //Start
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      //Stop - clear interval
      clearInterval(timeRef.current);
      timeRef.current = null;
    }
    setIsRuning(!isRunning); //Flip the bool
  };

  const resetTimer = () => {
    clearInterval(timeRef.current);
    setIsRuning(false);
    setTime(0);
    timeRef.current = null;
  };
  return (
    <div>
      <TimerDisplay label="Time since last crash" time={time} />
      <TimerControlls
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
        isRunning={isRunning}
      />
    </div>
  );
};

export default Timer;
