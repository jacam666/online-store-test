import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();

    const storedUser = localStorage.getItem(email);
    if (storedUser) {
      alert("Email already exists");
    } else {
      const newUser = {
        name,
        email,
        password,
        username: name,
      };
      localStorage.setItem(email, JSON.stringify(newUser));
      navigate("/", { state: { username: name, id: email } });
    }
  }

  return (
    <div className="Signup">
      <div className="signUp-container">
        <form className="signUp-Form" action="POST">
          <h1 className="signUp-header">Register</h1>
          <input
            className="signUp-Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            name=""
            id="signup-name"
          />
          <input
            className="signUp-Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name=""
            id="signup-email"
          />
          <input
            className="signUp-Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            name=""
            id="signup-password"
          />
          <input className="submit-button" type="submit" onClick={submit} />
          <p className="or">or</p>
          <div className="login-link-container">
            <Link className="login-link" to="/LoginPage">
              Login
            </Link>
          </div>
          </form>
        <br />
      </div>
    </div>
  );
}

export default SignupPage;

