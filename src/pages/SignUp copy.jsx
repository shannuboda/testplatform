import React from 'react'
import '../css/login-signup.css'
import l2 from '../img/register.svg'
import { useNavigate } from 'react-router-dom'
function SignUp() {
    const navigate = useNavigate()
  return (
    <>
    <div className="container sign-up-mode">
    <div className="forms-container">
      <div className="signin-signup">
        <form action="#" className="sign-up-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <i className="fas fa-user" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock" />
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" className="btn" defaultValue="Sign up" />
        </form>
      </div>
    </div>
    <div className="panels-container">

      <div className="panel right-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </p>
          <button className="btn transparent" id="sign-in-btn" onClick={()=>navigate('/')}>
            Sign in
          </button>
        </div>
        <img src={l2} className="image" alt="" />
      </div>
    </div>
  </div>
    </>

  )
}

export default SignUp