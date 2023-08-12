/*import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../Login.css";

const LoginPage = ({ isLoggedIn }) => {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const submit = (e) => {
      e.preventDefault();


    const storedUser = localStorage.getItem(email);
    if (storedUser) {

      console.log(storedUser)

      const user = JSON.parse(storedUser);
      if (user.password === password) {
        isLoggedIn(true);

        Navigate("/", { state: { name: user.name, id: email } });
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("Email not found");
    }
  }

  return (
    <div className="login-container">
      <div>
      <div className="login">
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
          <button className="login-submit-button" type="submit" onClick={submit}>Login</button>
          <div className="register-text-container">
          <p className="register-text">Haven't got an account? Please Register:</p>
          </div>

            

          <div className="signup-link-container">
            <Link className="signup-link" to="/SignupPage">
              Register
            </Link>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default LoginPage;

*/
import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone" />
        </MDBCol>

        <MDBCol col='4' md='6'>


          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Continue with facebook
          </MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Continue with twitter
          </MDBBtn>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;