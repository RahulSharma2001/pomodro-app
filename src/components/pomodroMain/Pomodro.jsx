import React, { useState } from "react";
import Header from "../header/Header";
import Login from "../login/Login";
import CountDownTimer from "../countDownTimer/CountDownTimer";

const Pomodro = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [logedIn, SetLogedIn] = useState(false);
  return (
    <div className="text-white ">
      <Header
        setShowLogin={setShowLogin}
        logedIn={logedIn}
        SetLogedIn={SetLogedIn}
      />
      <Login
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        SetLogedIn={SetLogedIn}
      />
      <div className="flex justify-center m-8  ">
        <div className=" rounded-xl  md:h-[calc(100vh-15vh)] md:w-5/12 bg-red-400">
          <CountDownTimer />
        </div>
      </div>
    </div>
  );
};

export default Pomodro;
