import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";

function SignupPage() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
          } else if (res.data === "notexist") {
            history("/home", { state: { id: email } });
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
    <div className="Signup">
      <Navbar />
      <div className="signUp-container">
        <form className="signUp-Form" action="POST">
          <h1 className="signUp-header">Register</h1>
          <input
            className="signUp-Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            name=""
            id=""
          ></input>
          <input
            className="signUp-Password"
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
