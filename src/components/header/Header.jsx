import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Header = ({ setShowLogin, logedIn, SetLogedIn }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Sign Out Successfully");
      SetLogedIn(false);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className=" md:flex md:justify-center text-white">
      <div className=" flex justify-between  md:w-1/2">
        <h1 className="text-2xl font-bold">POMODRO APP</h1>
        {logedIn ? (
          <button onClick={handleLogout}>Sign Out</button>
        ) : (
          <button
            onClick={() => setShowLogin((prev) => !prev)}
            className="text-sm font-medium  py-1 px-3 rounded-md bg-red-400  hover:bg-opacity-65 "
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
