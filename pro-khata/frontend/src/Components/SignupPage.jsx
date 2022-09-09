import React, { useState, useEffect } from "react";
import "../Styles/SignupPage.scss";
import { Link } from "react-router-dom";

function SignupPage() {
  const [userName, setUserName] = useState(null);
  // const [mobileNumber, setMobileNumber] = useState(null);
  // const [emailId, setEmailId] = useState(null);
  // const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    name: "",
    mobileNumber: 0,
    emailId: "",
    password: "",
  });
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/pro-khata");
      const json = await response.json();
      // console.log("response", response);
      // console.log("json", json);
      if (response.ok) {
        setUserName(json);
      }
    };
    fetchWorkouts();
  }, [error]);

  function handleChange(e, fieldName) {
    console.log(e.target.value);
    setData({
      ...data,
      [fieldName]: e.target.value,
    });
  }
  const handleClick = async (e) => {
    // e.preventDefault();
    console.log("HI");
    const response = await fetch("/api/pro-khata", {
      method: "Post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log("resp", response);
    console.log("json", json);
    if (response.ok) {
      setError(null);
      alert("Record saved");
      setData({
        name: "",
        mobileNumber: 0,
        emailId: "",
        password: "",
      });
    }
    if (!response.ok) {
      setError(json.error);
    }
  };
  return (
    <div className="parent-container">
      <div className="parent-card-signup">
        <div className="left-container">
          <h1 className="heading-font">Welcome Back !</h1>
          <div>{userName && userName.map((each) => <p> {each.name}</p>)}</div>
          <p className="paragraph-font">
            To keep connected please login with your personal info..
          </p>
          <Link to="/login">
            <button className="button sign-in">Sign In</button>
          </Link>
        </div>
        <div className="right-container">
          <h1 className="right-heading">Create Account</h1>
          <input
            className="input-field username"
            type="text"
            onChange={(e) => handleChange(e, "name")}
            placeholder="Name"
            value={data.name}
          ></input>
          <input
            className="input-field mobile"
            type="number"
            onChange={(e) => handleChange(e, "mobileNumber")}
            placeholder="Mobile Number"
            value={data.mobileNumber}
          ></input>
          <input
            className="input-field email"
            type="email"
            onChange={(e) => handleChange(e, "emailId")}
            placeholder="Email"
            value={data.emailId}
          ></input>
          <input
            className="input-field password"
            type="password"
            onChange={(e) => handleChange(e, "password")}
            placeholder="Password"
            value={data.password}
          ></input>
          {/* <Link to="/home-page"> */}
          <button className="button sign-up" onClick={(e) => handleClick(e)}>
            SIGN UP
          </button>
          {error && <p>{error}</p>}
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
