/*import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function SignupPage( { setIsUserLoggedIn}) {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
  
    console.log("Name:", name);
    console.log("Email:", email);
  
    const storedUser = localStorage.getItem(email);
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        console.log("Name:", user.name);
        console.log("Email:", user.email);
        console.log("Password:", user.password);
      } catch (error) {
        console.error("Error parsing stored user:", error);
      }
      alert("Email already exists");
    } else {
      const newUser = {
        name,
        email,
        password,
      };
      localStorage.setItem(email, JSON.stringify(newUser));
      setIsUserLoggedIn(true);
      navigate("/", { state: { name: name, email: email } });
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
          <button className="submit-button" type="submit" onClick={submit}>Register</button>
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

export default SignupPage;  */


/*import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function SignupPage( { setIsUserLoggedIn}) {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
  
    console.log("Name:", name);
    console.log("Email:", email);
  
    try {
      const response = await axios.post("/api/signup", {
        name,
        email,
        password,
      });
  
      console.log("Signup response:", response.data);
  
      setIsUserLoggedIn(true);
      navigate("/", { state: { name: name, email: email } });
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error occurred during signup");
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
          <button className="submit-button" type="submit" onClick={submit}>Register</button>
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

export default SignupPage;   */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";


function SignupPage( { setIsUserLoggedIn}) {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function submit(e) {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);

    const storedUser = localStorage.getItem(email);
    if (storedUser) {
      alert("Email already exists");
    } else {
      const newUser = {
        name,
        email,
        password,
      };
      const newUserString = JSON.stringify(newUser);
      localStorage.setItem(email, newUserString);
      setIsUserLoggedIn(true);
      navigate("/", { state: { name: name, email: email } });

    }
  }

  return (
    <div className="Signup">
      <Logo />
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
          {/*<input className="submit-button" type="submit" onClick={submit} />*/}
          <button className="signup-submit-button" type="submit" onClick={submit}>Register</button>
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


