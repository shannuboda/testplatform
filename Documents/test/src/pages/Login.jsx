import React from "react";
import "../css/login-signup.css";
import { useNavigate } from "react-router-dom";
import l1 from '../img/log.svg'
function Login() {
    const navigate = useNavigate()
  return (
    <>
    <div className="container sign-in-mode">
    <div className="forms-container">
      <div className="signin-signup">
        <form action="#" className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock" />
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" defaultValue="Login" className="btn solid" />
        </form>
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
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>
          <button className="btn transparent" id="sign-up-btn" onClick={()=>navigate('/signup')}>
            Sign up
          </button>
        </div>
        <img src={l1} className="image" alt="" />
      </div>
    
    </div>
  </div>
    </>
  );
}

export default Login;
