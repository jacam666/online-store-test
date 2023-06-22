import React from "react";
import { Link } from "react-router-dom";
import BasketIcon from "./components/BasketIcon";
import "./components/Navbar.css"
//import Logo from "./components/Logo";
import logoImage from "./components/images/logo-copy.png"

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/HomePage">Home</Link>
          </li>
          <li>
            <Link to="/LoginPage">Log in</Link>
          </li>
          <li>
              <img className="logo-image" src={logoImage} alt="logo" />
          </li>
          
          <li>
            <Link to="/TheStudioPage">Studio</Link>
          </li>
          <li>
            <Link to="/BasketPage">
              <BasketIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
