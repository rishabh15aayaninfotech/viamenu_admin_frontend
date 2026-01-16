import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div className="login-wrapper">
      <div className="login-card">

        <h1 className="crm-logo">CRM</h1>

        <h2 className="login-heading">Log in account</h2>
        <p className="login-subtext">
          Welcome back! Please enter your details.
        </p>

        <div className="form-group">
          <label>Email / Username</label>
          <input
            type="text"
            placeholder="Enter email / username"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-box">
            <input type="password" placeholder="********" />
            <span className="eye">👁</span>
          </div>
        </div>

        <div className="forgot">
          Forgot Password?
        </div>

        {/* 👇 LOGIN CLICK */}
        <button className="login-btn" onClick={handleLogin}>
          Sign in
        </button>

        <p className="signup-text">
          Don’t have an account? <span>Sign Up</span>
        </p>

      </div>
    </div>
  );
}
