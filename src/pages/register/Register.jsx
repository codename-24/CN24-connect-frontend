import React from 'react'
import "./register.css"
export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">CN24</h3>
                <span className="loginDesc">Connect with friends and the world around you</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input placeholder='Username' className='loginInput'/>
                    <input placeholder='Email' className='loginInput'/>
                    <input placeholder='Password' className='loginInput'/>
                    <input placeholder='Confirm Password' className='loginInput'/>
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Already have an account?</button>
                </div>   
            </div>
        </div>

    </div>
  )
}
