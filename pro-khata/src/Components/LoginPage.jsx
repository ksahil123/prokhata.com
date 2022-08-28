import React from 'react';
import '../Styles/LoginPage.scss';

function LoginPage() {
  return (
    <div className='parent-container'>
    <div className='parent-card'>
        <div className='right-container'>
            <h1 className='right-heading'>LOGIN PAGE</h1>
            <input className='input-field email' type='email' placeholder='Email'></input>  
            <input className='input-field password' type = 'password' placeholder='Password'></input>
            <button className='button sign-up' >SIGN IN</button>
        </div>
        <div className='left-container'>
            <div className='gif-container'>
            </div>
        </div>
    </div>
    </div>
  ) 
}

export default LoginPage