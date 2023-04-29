import React from "react";
import Card from "../components/card.component";
import Logo from "../components/Logo";
import Navbar from "../Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Logo />
      <Card /> 
    </div>
  );
}

export default HomePage;
