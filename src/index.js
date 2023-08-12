import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./Navbar";
import Footer from "./components/Footer";
//import HomePage from "./Pages/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MyNavbar />
    <App />
    <Footer />
  </BrowserRouter>
);

reportWebVitals();
