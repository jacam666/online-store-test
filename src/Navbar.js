import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./components/Navbar.css"
import BasketIcon from './BasketIcon';

function MyNavbar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to='/'>UKSNC Supplements</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto d-flex justify-content-center align-items-center">
                        <Nav.Link as={Link} to='/' className="text-dark mr-5">Home</Nav.Link>
                        <Nav.Link as={Link} to='/ProteinCataloguePage' className="text-dark mr-5">Proteins</Nav.Link>
                        <Nav.Link as={ Link } to='/PreWorkoutCataloguePage' className="text-dark mr-5">Pre-Workouts</Nav.Link>
                        <Nav.Link as={ Link } to='/FatLossCataloguePage' className="text-dark mr-5">Fat Loss</Nav.Link>
                        <Nav.Link as={ Link } to='/WellBeingCataloguePage' className="text-dark mr-5">General Wellbeing</Nav.Link>
                        <Nav.Link as={ Link } to='/TrainingAndDietPage' className="text-dark mr-5">Training and Diet Plans</Nav.Link>
                        <Nav.Link as={ Link } to='/TheStudioPage' className="text-dark mr-5">The Studio</Nav.Link>
                        <Nav.Link as={ Link } to='/BasketPage' className="text-dark mr-5 "><BasketIcon /></Nav.Link>
                    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default MyNavbar;

