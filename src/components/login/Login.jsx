import React, { useRef } from "react";
import { useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = ({ showLogin, setShowLogin, SetLogedIn }) => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const wrongRef = useRef(null);

  const handleUser = async (e) => {
    e.preventDefault();
    if (!login) {
      if (password !== confirmPassword) {
        wrongRef.current.style.backgroundColor = "red";
        return;
      }
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("User created successfully!");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } catch (error) {
        alert(error.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        SetLogedIn(true);
        alert("User signed in successfully!");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } catch (error) {
        alert(error.message);
      }
    }
    setShowLogin(false);
  };

  return (
    <>
      {showLogin && (
        <div className=" text-black absolute top-16 right-28 border-2 border-sky-950 rounded-md p-5 bg-red-400 ">
          <form
            onSubmit={handleUser}
            className="flex flex-col gap-5 bg-red-400 "
          >
            <div className="bg-red-400">
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                name=""
                id="email"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="bg-red-400">
              <label htmlFor="password">Password</label>
              <br />
              <input
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="password"
                name=""
                id="password"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            {!login && (
              <div>
                <label htmlFor="cpassword">Confirm Password</label>
                <br />
                <input
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  type="password"
                  name=""
                  id="cpassword"
                  placeholder="Confirm Your Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  ref={wrongRef}
                  required
                />
              </div>
            )}
            <button className="text-center w-full" type="submit">
              <span className="rounded-md bg-red-400 hover:bg-red-300 p-2 border-2 border-solid border-white">
                {login ? "Login" : "Sign up"}
              </span>
            </button>
            {login ? (
              <p onClick={() => setLogin(false)}>
                Don't have an account ?
                <span className="font-bold cursor-pointer">Sign Up</span>
              </p>
            ) : (
              <p onClick={() => setLogin(true)}>
                Already have an account ?
                <span className="font-bold cursor-pointer">Login</span>
              </p>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
