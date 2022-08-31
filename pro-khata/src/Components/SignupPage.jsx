import React from 'react';
import '../Styles/SignupPage.scss';

function SignupPage() {
  return (
    <div className='parent-container'>
    <div className='parent-card-signup'>
        <div className='left-container'>
            <h1 className='heading-font'>Welcome Back ! </h1>
            <p className='paragraph-font'>To keep connected please login with your personal info..</p>
            <button className='button sign-in'>Sign In</button>
        </div>
        <div className='right-container'>
            <h1 className='right-heading'>Create Account</h1>
            {/* <label>Enter Your Name :</label> */}
            <input className='input-field username' type='text' placeholder='Name' ></input>  
            {/* <label>Enter Your Mobile Number :</label>  */}
            <input className='input-field mobile' type='number' placeholder='Mobile Number'></input>   
            {/* <label>Enter Your Email Address :</label>   */}
            <input className='input-field email' type='email' placeholder='Email'></input>  
            {/* <label>Enter Your Password:</label>   */}
            <input className='input-field password' type = 'password' placeholder='Password'></input>
            <button className='button sign-up' >SIGN UP</button>
        </div>
    </div>
    </div>
  ) 
}

export default SignupPage