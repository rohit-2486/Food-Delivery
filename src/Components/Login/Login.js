import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../../Utils/Redux/userSlice";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.item);

  function checkUserLogin() {
    if (email === "food@gmail.com" && password === "food") {
      dispatch(userLogin());
    } else {
      dispatch(userLogout());
    }
    setEmail("");
    setPassword("");
  }
  return (
    <div className="login">
      <div className="loginCard">
        <h2>Login Page</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={() => checkUserLogin()}>Login</button>
        <p>Email - food@gmail.com</p>
        <p>Password - food</p>
        <span>{isLogin ? "Login Successful." : " "}</span>
      </div>
    </div>
  );
};

export default Login;
