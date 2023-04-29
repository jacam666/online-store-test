import "./App.css";
//import { BrowserRouter as Router, Routes, Route } from "express";
import { Routes, Route } from "react-router-dom"
//import Navbar from "./Navbar";
//import Logo from "./components/Logo";
//import Card from "./components/card.component";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
        <div className="App">
          <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/LoginPage" element={ <LoginPage /> }/>
            <Route path="/SignupPage" element={ <SignupPage /> }/>
          </Routes>
    </div>
  );
}

export default App;
