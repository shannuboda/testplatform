import React, { useState } from "react";
import "../css/login-signup.css";
import l2 from "../img/register.svg";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
              {/* File upload field */}
              {/* File upload field */}
              <div className="input-field" style={{width:'auto'}}>
                <div className="file-input-wrapper" style={{width:'auto'}}>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              {/* Image preview */}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="image-preview"
                  width="108rem"
                  height="108rem"
                />
              )}
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
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => navigate("/")}
              >
                Sign in
              </button>
            </div>
            <img src={l2} className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
