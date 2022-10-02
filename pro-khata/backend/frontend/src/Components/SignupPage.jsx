import React, { useState, useEffect } from "react";
import "../Styles/SignupPage.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAuthenticationSignupError,
  selectAuthenticationUser,
} from "../Redux/selector";
import {
  actionRequestSignup,
  // actionSetLogin,
} from "../Redux/Reducers/authenticationReducer";
// import { actionSetHideScreenLoader, actionSetShowScreenLoader } from "../Redux/Reducers/screenLoaderReducer";
function SignupPage() {
  const dispatch = useDispatch();
  const signupError = useSelector(selectAuthenticationSignupError);
  const userData = useSelector(selectAuthenticationUser);
  const [data, setData] = useState({
    name: "",
    mobileNumber: 0,
    emailId: "",
    password: "",
  });
  // useEffect(() => {
  //   const fetchWorkouts = async () => {
  //     const response = await fetch("/api/pro-khata", {
  //       headers: {
  //         Authorization: `Bearer ${userData.token}`,
  //       },
  //     });
  //     const json = await response.json();
  //     console.log("json", json);
  //     if (response.ok) {
  //       // setUserName(json);
  //       // dispatch(actionSetShowScreenLoader());
  //       dispatch(actionSetWorkoutData(json));
  //       // dispatch(actionSetHideScreenLoader());
  //     }
  //   };
  //   if (userData) {
  //     fetchWorkouts();
  //   }
  // }, [userData]);

  function handleChange(e, fieldName) {
    console.log(e.target.value);
    setData({
      ...data,
      [fieldName]: e.target.value,
    });
  }
  useEffect(() => {
    if (userData) {
      setData({
        name: "",
        mobileNumber: 0,
        emailId: "",
        password: "",
      });
    }
  }, [userData]);
  const handleClick = async (e) => {
    dispatch(actionRequestSignup(data));

    // const response = await fetch("/api/user/signup", {
    //   method: "Post",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",  
    //   },
    // });
    // const json = await response.json();
    // // console.log("resp", response);
    // console.log("json put", json);
    // if (response.ok) {
    //   setError(null);
    //   alert("Record saved");
    //   dispatch(actionSetLogin(json.token));
    //   setData({
    //     name: "",
    //     mobileNumber: 0,
    //     emailId: "",
    //     password: "",
    //   });
    // }
    // if (!response.ok) {
    //   setError(json.error);
    // }
  };
  return (
    <div className="parent-container">
      <div className="parent-card-signup">
        <div className="left-container">
          <h1 className="heading-font">Welcome Back !</h1>
          {/* <div>
            {workoutData && workoutData.map((each) => <p> {each.name}</p>)}
          </div> */}
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
          {signupError && <p>{signupError}</p>}
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
