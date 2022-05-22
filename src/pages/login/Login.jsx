import React from 'react'
import "./login.css"
export default function Login() {
  return (
    <div className="login1">
        <div className="loginWrapper1">
            <div className="loginLeft1">
                <img src="/assets/logo/c24.png" alt="" className="loginc24Logo1" />
                <h3 className="loginTitle1">Codename 24</h3>
                <span className="loginDesc1"><q>Keep in touch with your closed ones</q></span>
            </div>
            <div className="loginRight1">
                <div className="loginBox1">
                    <input placeholder='Email' className='loginInput1'/>
                    <input placeholder='Password' type="password" className='loginInput1'/>
                    <button className="loginButton1">Login</button>
                    <span className="loginForgot1">Forgot Password?</span>
                    <button className="loginRegisterButton1">Create a New Account</button>
                </div>   
            </div>
        </div>

    </div>
  )
}
