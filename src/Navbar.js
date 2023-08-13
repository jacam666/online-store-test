import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./components/Navbar.css"
import BasketIcon from './BasketIcon';
import { useState } from 'react';

function MyNavbar() {

  const [expanded, setExpanded] = useState(false);

  const handelNavClick = () => {
    setExpanded(false);
  }


    return (
      <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to='/' onClick={handelNavClick}>UKSNC Supplements</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto d-flex justify-content-center align-items-center">
                        <Nav.Link as={Link} to='/' className="text-dark mr-5" onClick={handelNavClick}>Home</Nav.Link>
                        <Nav.Link as={Link} to='/ProteinCataloguePage' className="text-dark mr-5" onClick={handelNavClick}>Proteins</Nav.Link>
                        <Nav.Link as={ Link } to='/PreWorkoutCataloguePage' className="text-dark mr-5" onClick={handelNavClick}>Pre-Workouts</Nav.Link>
                        <Nav.Link as={ Link } to='/FatLossCataloguePage' className="text-dark mr-5" onClick={handelNavClick}>Fat Loss</Nav.Link>
                        <Nav.Link as={ Link } to='/WellBeingCataloguePage' className="text-dark mr-5" onClick={handelNavClick}>General Wellbeing</Nav.Link>
                        <Nav.Link as={ Link } to='/TrainingAndDietPage' className="text-dark mr-5" onClick={handelNavClick}>Training and Diet Plans</Nav.Link>
                        <Nav.Link as={ Link } to='/TheStudioPage' className="text-dark mr-5" onClick={handelNavClick}>The Studio</Nav.Link>
                        <Nav.Link as={ Link } to='/BasketPage' className="text-dark mr-5" onClick={handelNavClick}><BasketIcon /></Nav.Link>
                    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default MyNavbar;

