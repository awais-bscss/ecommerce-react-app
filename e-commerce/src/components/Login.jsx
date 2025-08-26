import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "./users";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", true); // mark user logged in
      setMessage(`✅ Welcome ${user.username}`);
      navigate("/"); // redirect to Home
    } else {
      setMessage("❌ Invalid username or password");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Login</h2>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Enter 4-digit Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern="\d{4}"
          maxLength="4"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Login;
