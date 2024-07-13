import React, { useEffect, useRef, useState } from "react";

const CountDownTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [second, setSecond] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [mode, setMode] = useState("focus");

  const timer = useRef(null);

  const handleStart = () => {
    setStarted(true);
    if (timer.current) {
      clearInterval(timer.current);
    }
    timer.current = setInterval(() => {
      setSecond((prev) => {
        if (prev === 0) {
          if (minutes === 0) {
            resetHandler();
            setFinished(true);
            return 0;
          } else {
            setMinutes((prev) => prev - 1);
            return 59;
          }
        } else {
          return prev - 1;
        }
      });
    }, 1000);
  };

  const stopHandler = () => {
    if (timer.current) {
      clearInterval(timer.current);
      setStarted(false);
    }
  };

  const handleChange = (current) => {
    if (current === "focus") {
      setMode("focus");
      setMinutes(25);
      setSecond(0);
      setStarted(false);
      setFinished(false);
      if (timer.current) {
        clearInterval(timer.current);
        setStarted(false);
      }
    } else {
      setMode("break");
      setMinutes(5);
      setSecond(0);
      setStarted(false);
      setFinished(false);
      if (timer.current) {
        clearInterval(timer.current);
        setStarted(false);
      }
    }
  };

  const resetHandler = () => {
    if (timer.current) {
      clearInterval(timer.current);
      setStarted(false);
    }
    if (mode === "focus") {
      setMinutes(25);
      setSecond(0);
      setStarted(false);
      setFinished(false);
    } else {
      setMinutes(5);
      setSecond(0);
      setStarted(false);
      setFinished(false);
    }
  };

  useEffect(() => {
    clearInterval(timer.current);
  }, []);

  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex justify-center gap-7 m-2">
        <div>
          <button
            className={`${mode === "focus" ? "btn active" : "btn"}`}
            onClick={() => handleChange("focus")}
          >
            Focus
          </button>
        </div>
        <div>
          <button
            className={`${mode === "break" ? "btn active" : "btn"}`}
            onClick={() => handleChange("break")}
          >
            Break
          </button>
        </div>
      </div>
      <div className="text-8xl my-14">
        <h1>
          {minutes < 10 ? `0 ${minutes}` : minutes} :{" "}
          {second < 10 ? `0 ${second}` : second}
        </h1>
      </div>
      <div className="flex justify-center gap-5">
        {started ? (
          <button
            className="hover:bg-red-500 p-2 rounded-lg  bg-white text-red-500 hover:text-white"
            onClick={stopHandler}
          >
            Stop
          </button>
        ) : (
          <button
            className="hover:bg-red-500 p-2 rounded-lg bg-white text-red-500 hover:text-white"
            onClick={handleStart}
          >
            Start
          </button>
        )}
        <button
          className="hover:bg-red-500 p-2 rounded-lg bg-white text-red-500 hover:text-white"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
      <h2 className="text-gray-200 text-3xl m-10">
        TIME TO {mode.toUpperCase()}
      </h2>

      {finished && (
        <h2 className="text-xl text-yellow-200 font-bold">
          Consider Taking {mode === "focus" ? "Break" : "Focus"} Mode :)
        </h2>
      )}
    </div>
  );
};

export default CountDownTimer;
