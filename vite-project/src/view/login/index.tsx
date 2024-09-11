import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./index.css";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = () => {
    // if (username === "admin" && password === "admin") {
    //   navigate("/home");
    // } else {
    //   setErrorMessage("Invalid username or password");
    // }
    navigate("/home");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
};
