import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  actionRequestLogout,
  actionSetLogin,
  actionSetLogout,
} from "../Redux/Reducers/authenticationReducer";
import { selectAuthenticationUser } from "../Redux/selector";
import "../Styles/Navbar.scss";
function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthenticationUser);
  useEffect(() => {
    const userSession = JSON.parse(localStorage.getItem("user"));
    console.log("userSession", userSession);
    if (userSession) {
      dispatch(actionSetLogin(userSession));
    }
  }, []);
  function handleLogout() {
    dispatch(actionRequestLogout());
  }
  return (
    <div className="container">
      <hi>Pro - Khata</hi>
      <span>Hi {user && user.emailId} </span>
      <nav>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
}

export default Navbar;
