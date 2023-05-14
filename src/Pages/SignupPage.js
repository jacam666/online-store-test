/*import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

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
            id="signup-email"
          ></input>
          <input
            className="signUp-Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            name=""
            id="signup-password"
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

*/

import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";

function SignupPage() {
  const history = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();

    // Check if the email already exists in localStorage
    const storedUser = localStorage.getItem(email);
    if (storedUser) {
      alert("Email already exists");
    } else {
      // Save the user to localStorage
      const newUser = {
        name,
        email,
        password,
      };
      localStorage.setItem(email, JSON.stringify(newUser));
      history("/home", { state: { id: email } });
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

