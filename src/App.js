import "./App.css";
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import OnlyWhey from "./Pages/OnlyWheyPage";
import Basket from "./Pages/Basket";
import AfterTrain from "./Pages/AfterTrainPage";
import AfterTrainAdvanced from "./Pages/AfterTrainAdvancedPage";
import StageRipped from "./components/StageRippedPage";
import B4Extreme from "./Pages/B4ExtremePage";
import B4Train from "./Pages/B4TrainPage";
import B4TrainGummy from "./Pages/B4TrainGummyPage";


function App() {
  return (
        <div className="App">
          <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/LoginPage" element={ <LoginPage /> }/>
            <Route path="/SignupPage" element={ <SignupPage /> }/>
            <Route path="/Basket" element={ <Basket /> }/>
            <Route path="/OnlyWheyPage" element={ <OnlyWhey /> }/>
            <Route path="/AfterTrainPage" element={ <AfterTrain /> }/>
            <Route path="/AfterTrainAdvancedPage" element={ <AfterTrainAdvanced /> }/>
            <Route path="/StageRippedPage" element={ <StageRipped /> }/>
            <Route path="/B4ExtremePage" element={ <B4Extreme /> }/>
            <Route path="/B4TrainPage" element={ <B4Train /> }/>
            <Route path="/B4TrainGummyPage" element={ <B4TrainGummy /> }/>
          </Routes>
    </div>
  );
}

export default App;
