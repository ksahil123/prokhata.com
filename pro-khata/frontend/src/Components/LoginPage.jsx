import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionRequestLogin } from "../Redux/Reducers/authenticationReducer";
import { selectAuthenticationLoginError } from "../Redux/selector";
import "../Styles/LoginPage.scss";
function LoginPage() {
  const dispatch = useDispatch();
  const loginError = useSelector(selectAuthenticationLoginError);
  const [data, setData] = useState({
    emailId: "",
    password: "",
  });
  function handleChange(e, fieldName) {
    setData({
      ...data,
      [fieldName]: e.target.value,
    });
  }
  function handleSignIn(e) {
    console.log(data);
    dispatch(actionRequestLogin(data));
  }
  return (
    <div className="parent-container">
      <div className="parent-card-loginpage">
        <div className="right-container">
          <h1 className="right-heading">LOGIN PAGE</h1>
          {console.log("data", data)}
          <input
            className="input-field email"
            type="email"
            placeholder="Email"
            onChange={(e) => handleChange(e, "emailId")}
          ></input>
          <input
            className="input-field password"
            type="password"
            placeholder="Password"
            onChange={(e) => handleChange(e, "password")}
          ></input>
          {/* <Link to="/home-page"> */}
          <button className="button sign-up" onClick={(e) => handleSignIn(e)}>
            SIGN IN
          </button>
          {/* </Link> */}
          {loginError && <p>{loginError}</p>}
        </div>
        <div className="left-container">
          <div className="gif-container"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
