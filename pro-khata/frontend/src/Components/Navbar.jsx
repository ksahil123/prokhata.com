import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  actionRequestLogout,
} from "../Redux/Reducers/authenticationReducer";
import { selectAuthenticationUser } from "../Redux/selector";
import "../Styles/Navbar.scss";
function Navbar() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const user = useSelector(selectAuthenticationUser);
  function handleLogout() {
    dispatch(actionRequestLogout());
    // navigate("/signup");
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
