import React from "react";
import { Link } from "react-router-dom";
import BasketIcon from "./components/BasketIcon";

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/LoginPage">Log in</Link>
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
