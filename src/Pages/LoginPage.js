import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function LoginPage({ isLoggedIn }) {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*async function submit(e) {
    e.preventDefault(); */
    const submit = (e) => {
      e.preventDefault();

    const storedUser = localStorage.getItem(email);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.password === password) {
        isLoggedIn(true);

        Navigate("/", { state: { id: email } });
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("Email not found");
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <form className="login-form" action="POST">
          <h1 className="login-header">Login</h1>
          <input
            className="login-email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name=""
            id="login"
          />
          <input
            className="login-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            name=""
            id="login-password"
          />
          <input className="submit-button" type="submit" onClick={submit} />
          <p className="or">or</p>
          <div className="signup-link-container">
            <Link className="signup-link" to="/SignupPage">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;


