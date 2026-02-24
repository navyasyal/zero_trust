import React, { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClick = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLogin = () => {
    localStorage.setItem("token", "abc123");
    window.location.href = "http://localhost:3000";
  };

  return (
    <div className="auth-container">
      <div className={`container ${isSignUp ? "" : "right-panel-active"}`}>

        {/* --- SIGN UP FORM --- */}
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>

            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>

            <div className="password-field">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
              />
              <span
                className="eye-icon"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>

            <button type="button">Sign Up</button>
          </form>
        </div>

        {/* --- LOGIN FORM --- */}
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Login</h1>

            <input type="email" placeholder="Email" />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>

            <a href="#">Forgot your password?</a>

            <button type="button" onClick={handleLogin}>
              Login In
            </button>
          </form>
        </div>

        {/* --- OVERLAY --- */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={handleClick}>
                Sign In
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>
                Enter your personal details and start journey with us
              </p>
              <button className="ghost" onClick={handleClick}>
                Login In 
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Auth;