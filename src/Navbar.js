/*import React from "react";
import { Link } from "react-router-dom";
import BasketIcon from "./components/BasketIcon";
import "./components/Navbar.css"
import logoImage from "./components/images/logonew-3.png"

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

*/
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./components/Navbar.css"

function MyNavbar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to='/'>UKSNC Supplements</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
                        <Nav.Link as={Link} to='/' className="text-dark mr-5">Home</Nav.Link>
                        <Nav.Link as={Link} to='/ProteinCataloguePage' className="text-dark mr-5">Proteins</Nav.Link>
                        <Nav.Link as={ Link } to='/PreWorkoutCataloguePage' className="text-dark mr-5">Pre-Workouts</Nav.Link>
                        <Nav.Link as={ Link } to='/FatLossCataloguePage' className="text-dark mr-5">Fat Loss</Nav.Link>
                        <Nav.Link as={ Link } to='/WellBeingCataloguePage' className="text-dark mr-5">General Wellbeing</Nav.Link>
                        <Nav.Link as={ Link } to='/TrainingAndDietPage' className="text-dark mr-5">Training and Diet Plans</Nav.Link>
                    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default MyNavbar;

