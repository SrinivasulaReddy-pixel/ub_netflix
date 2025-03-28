import React, { useState } from "react";
import "./LoginAndRegister.css";

export const LoginAndRegister = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
      let newErrors = {};
      if (!email) {
          newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = "Invalid email format";
      }

      if (!password) {
          newErrors.password = "Password is required";
      } else if (password.length < 6) {
          newErrors.password = "Password must be at least 6 characters";
      }

      if (!confirmPassword) {
        newErrors.confirmPassword = "Password is required";
    } else if (confirmPassword.length < 6) {
        newErrors.confirmPassword = "Password must be at least 6 characters";
    }


      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
          console.log("Form submitted successfully", { email, password });
      }
  };

  return (
    <div className="login-and-registration-page">
      <div className="login-and-registration-section">
        <form onSubmit={handleSubmit}>
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
                <input type="text" placeholder="User Name"/>
              </div>
              <div>
                <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
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
                  <button type="submit">Login</button>
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
                <input type="email" value={email} placeholder="Your email" onChange={(e) => setEmail(e.target.value)}/>
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>
              <div>
                <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
              </div>
              <div>
                <input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword}</p>}
              </div>
              <div className="register-button">
                <span>
                  <button type="submit">Register</button>
                </span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
