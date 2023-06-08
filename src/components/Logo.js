import React from "react";
import logoImage from "./images/logo.png";


const Logo = () => {
    return (
        <div className="logo-container">
            <img className="logo" src={logoImage} alt="Logo" />
        </div>
    );
}

export default Logo; 
