import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/HomePage", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("email is not known");
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            name=""
            id=""
          ></input>
          <input
            className="login-password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            name=""
            id=""
          ></input>

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
