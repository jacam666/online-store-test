import "./App.css";
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import OnlyWhey from "./Pages/OnlyWheyPage";
import Basket from "./Pages/Basket";

function App() {
  return (
        <div className="App">
          <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/LoginPage" element={ <LoginPage /> }/>
            <Route path="/SignupPage" element={ <SignupPage /> }/>
            <Route path="/Basket" element={ <Basket /> }/>
            <Route path="/OnlyWheyPage" element={ <OnlyWhey /> }/>
          </Routes>
    </div>
  );
}

export default App;
