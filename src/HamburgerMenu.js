/*import React, { useState } from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import "./HamburgerMenu.css";


const COLORS = {
    primaryDark: "#115b4c",
    primaryLight: "#B6EDC8",
};

const MenuLabel = styled.label`
background-color:${COLORS.primaryLight};
position: fixed;
top: 1rem;
right: 0.3rem;
border-radius: 50%;
height: 7rem;
width: 7rem;
cursor: pointer;
z-index: 1000;
box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
text-align: center;
`;

const NavBackground = styled.div`
position: fixed;
top: 6.5rem;
right: 6.5rem;
background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
);
height: 6rem;
width: 6rem;
border-radius: 50%;


transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
    transition:transform 0.8s;
`;

const Icon = styled.span`
position: relative;
background-color: ${props =>
        props.clicked ? "transparent" : "black"
    };
width: 3rem;
height: 2px;
display: inline-block;
margin-top: 3.5rem;
transition: all 0.3s;

&::before, 
&::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s
}

&::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${props => props.clicked ? "rotate(135deg)" : "rotate(0)"};
}

&::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${props => props.clicked ? "rotate(-135deg)" : "rotate(0)"};
}

`;

const Navigation = styled.nav`
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 600;
    width: ${(props) => (props.clicked ? "100%" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};

    transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
    position: absolute;
    list-style: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
`;

const ItemLink = styled(NavLink)`
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    text-decoration: none;
    color: ${COLORS.primaryLight};
    padding: 1rem 2rem;

    background-image: linear-gradient(
        120deg,
        transparent 0%, transparent 50%, #fff 50%
    );
    background-size: 240%;
    transition: all 0.4s;

    &:hover,
    &:after {
        background-position: 100%;
        color:${COLORS.primaryDark};
        transform: translateX(1rem);
    }
`;

function HamburgerMenu() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <MenuLabel htmlFor='navi-toggle' onClick={handleClick}>
                <Icon clicked={click}>&nbsp;</Icon>
            </MenuLabel>
            <NavBackground clicked={click}>&nbsp;</NavBackground>

            <Navigation clicked={click}>
                <List>
                    <li>
                        <ItemLink onClick={handleClick} to="/">
                            Home
                        </ItemLink>
                    </li>

                    <li>
                        <ItemLink onClick={handleClick} to="/about">
                            About
                        </ItemLink>
                    </li>

                    <li>
                        <ItemLink onClick={handleClick} to="/ProteinCataloguePage">
                            Proteins
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to="/PreWorkoutCataloguePage">
                            Pre-Workouts
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to="/FatLossCataloguePage">
                        Fat Loss    
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to="/WellBeingCataloguePage">
                            General Wellbeing
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to="/ContactPage">
                            Contact Us
                        </ItemLink>
                    </li>
                </List>
            </Navigation>
        </>
    )
}

export default HamburgerMenu
*/
/*
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./HamburgerMenu.css";

function HamburgerMenu() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <label htmlFor='navi-toggle' onClick={handleClick} className="menu-label">
                <span className={`icon ${click ? "clicked" : ""}`}></span>
            </label>
            <div className={`nav-background ${click ? "clicked" : ""}`}></div>

            <nav className={`navigation ${click ? "clicked" : ""}`}>
                <ul className="list">
                    <li>
                        <NavLink onClick={handleClick} to="/" className="item-link">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={handleClick} to="/LoginPage" className="item-link">
                            Log In
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleClick} to="/SignUpPage" className="item-link">
                            Register
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={handleClick} to="/ProteinCataloguePage" className="item-link">
                            Proteins
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleClick} to="/PreWorkoutCataloguePage" className="item-link">
                            Pre-Workouts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleClick} to="/FatLossCataloguePage" className="item-link">
                        Fat Loss    
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleClick} to="/WellBeingCataloguePage" className="item-link">
                            General Wellbeing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleClick} to="/ContactPage" className="item-link">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default HamburgerMenu;
*/
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./HamburgerMenu.css";

function HamburgerMenu({ click, setClick }) {
    const handleClick = () => setClick(!click);
    return (
        <>
            <label htmlFor='navi-toggle' onClick={handleClick} className="menu-label">
                <span className={`icon ${click ? "clicked" : ""}`}></span>
            </label>
            <div className={`nav-background ${click ? "clicked" : ""}`}></div>

            <nav className={`navigation ${click ? "clicked" : ""}`}>
                <ul className="list">
                    <li>
                        <NavLink onClick={handleClick} to="/" className="item-link">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={handleClick} to="/LoginPage" className="item-link">
                            Log In
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleClick} to="/SignUpPage" className="item-link">
                            Register
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={handleClick} to="/ProteinCataloguePage" className="item-link">
                            Proteins
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleClick} to="/PreWorkoutCataloguePage" className="item-link">
                            Pre-Workouts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleClick} to="/FatLossCataloguePage" className="item-link">
                        Fat Loss    
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleClick} to="/WellBeingCataloguePage" className="item-link">
                            General Wellbeing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleClick} to="/TrainingAndDietPage" className="item-link">
                            Training and Diet Plans
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleClick} to="/ContactPage" className="item-link">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default HamburgerMenu;

