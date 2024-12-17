
import React from "react";
import "./login.css";
import { assets } from "../../assets/assets";

const LoginForm = ({
handleLogin,
email,
setEmail,
password,
setPassword,
errorMessage,
}) => {
return (
<div className="body">
  <header className="header">
    <div className="header-container">
      <img src={assets.logo} alt="Krishi Sanjal Logo" className="logo" />
      <h1>Krishi Sanjal</h1>
    </div>
  </header>

  <div className="form">
    <form onSubmit={handleLogin}>
      <h1>Welcome back!</h1>

      {/* Email Input with Label */}
      <div className="input-box">
        <label htmlFor="email">Email</label>
        <div className="input-field">
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </div>
      </div>

      {/* Password Input with Label */}
      <div className="input-box">
        <label htmlFor="password">Password</label>
        <div className="input-field">
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i class="fa fa-unlock-alt" aria-hidden="true"></i>
        </div>
      </div>

      <button type="submit" className="btn">
        Login
      </button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="form-footer">
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
        <p>
          Don't have an account?{" "}
          <a href="/signup" className="create-account">
            Create New Account
          </a>
        </p>
      </div>
    </form>
  </div>
</div>
);
};

export default LoginForm;