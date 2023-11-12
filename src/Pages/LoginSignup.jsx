import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Enter Your Name'/>
          <input type="email" placeholder='Enter Your Email ID'/>
          <input type="password" placeholder='Enter Your Password'/>
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">Already Have an Account ? <span>Login Here</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing , I agree to te terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
