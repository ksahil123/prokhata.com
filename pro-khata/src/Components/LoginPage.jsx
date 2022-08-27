import React from 'react';
import '../Styles/LoginPage.scss';
function LoginPage() {
  return (
    <div>
        Login Page
        <label>Enter Your Name :</label>
        <input placeholder='name'></input>  
        <label>Enter Your Mobile Number :</label> 
        <input type='numeric' placeholder='mobile number'></input>   
        <label>Enter Your Email Address :</label>  
        <input placeholder='email'></input>  
        <button>Log In</button>
    </div>
  ) 
}

export default LoginPage