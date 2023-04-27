import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Basket from "./Pages/Basket";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
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
            <Link to="/SignupPage">Sign up</Link>
          </li>
          <li>
            <Link to="/Basket">
              <BasketIcon />
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default Navbar;
