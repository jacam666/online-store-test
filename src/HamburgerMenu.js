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
                        <NavLink onClick={handleClick} to="/TheStudioPage" className="item-link">
                            The SNC Studio
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default HamburgerMenu;

