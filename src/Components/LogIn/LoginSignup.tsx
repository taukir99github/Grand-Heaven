import React, { useState } from "react";
import "./LognSignup.css";
import log from "../../Images/log.svg";
import Register from "../../Images/register.svg";
import { FaGoogle } from "react-icons/fa";

const LoginSignup = () => {
  const [isSignUpMode, setSignUpMode] = useState(false);
  const [userType, setUserType] = useState("");

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };
  const handleUserTypeClick = (type: string) => {
    setUserType(type);
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>

            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in With Google</p>
            <div className="social-media">
              <div className="google">
                <FaGoogle />
              </div>
              <div className="google-text">
                <span>Continue With Google</span>
              </div>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="options">
              <div className="font-semibold text-lg">
                {" "}
                <span>You are:</span>
              </div>
              <div className="flex gap-8">
                <button
                  className={userType === "owner" ? "selected" : ""}
                  onClick={() => handleUserTypeClick("owner")}
                >
                  Owner
                </button>
                <button
                  className={userType === "agents" ? "selected" : ""}
                  onClick={() => handleUserTypeClick("agents")}
                >
                  Agents
                </button>
              </div>
              {(userType === "owner" || userType === "agents") && (
                <>
                  <div className="flex gap-12">
                    <button>Sell</button>
                    <button>Rent</button>
                  </div>
                </>
              )}
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign Up With Google</p>
            <div className="social-media">
              <div className="google">
                <FaGoogle />
              </div>
              <div className="google-text">
                <span>Continue With Google</span>
              </div>
            </div>
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
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src={log} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src={Register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
