import React, { useState } from "react";
import "./LoginAndRegister.css";

export const LoginAndRegister = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(true);
  return (
    <div className="login-and-registration-page">
      <div className="login-and-registration-section">
        <div className="login-and-registration-title-section">
          <span
            onClick={(e) => {
              e.preventDefault();
              setLogin(true);
            }}
            className={login ? "text-red" : "text-white"}
          >
            Login
          </span>{" "}
          <span className="text-red"> | </span>{" "}
          <span
            onClick={(e) => {
              e.preventDefault();
              setLogin(false);
            }}
            className={!login ? "text-red" : "text-white"}
          >
            Register
          </span>
        </div>
        {login && (
          <div className="login-section">
            <div>
              <input type="text" placeholder="User Name" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div className="checkbox-section">
              <span className="checkbox-part">
                <input type="checkbox" />
                <span>Remember me</span>
              </span>

              <span className="checkbox-forget-password">Forgot Password?</span>
            </div>
            <div className="login-button">
              <span>
                <button>Login</button>
              </span>
            </div>
          </div>
        )}
        {!login && (
          <div className="register-section">
            <div>
              <input type="text" placeholder="User Name" />
            </div>
            <div>
              <input type="email" placeholder="Your email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="register-button">
              <span>
                <button>Register</button>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
