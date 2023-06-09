import React, { useState } from "react";
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
          <div className="login-text-container">
          <p className="login-text">If you already have an account please Login:</p>
          </div>
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


