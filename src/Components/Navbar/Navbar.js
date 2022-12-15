import './navbar.css';

import React from "react";
import { Link } from 'react-router-dom';

let activeLink;

function DeactivateLink () {
    document.getElementById(activeLink).classList.remove('activeNav');
    
}

export function activateLink () {
    if (activeLink) {
        DeactivateLink()
    }

    if (window.location.pathname === '/') {
        activeLink = 'home-link';
    } else {
        activeLink = window.location.pathname.slice(1, window.location.pathname.length) + "-link";
        document.getElementById(activeLink).className = 'activeNav'
    }
}

export default function Navbar () {


    return (
        <div id="navbar">
            <div id="logo-container">
                <Link to="/" id="home-link"><span className='blue'>&lt;</span>  <span className='white'>gb/</span>  <span className='gold'>&gt;</span></Link>
            </div>
            <ul>
                <strong><Link to="/about"><li id="about-link" >/ABOUT ME</li></Link></strong>
                <strong><Link to="/projects"><li id="projects-link">/PROJECTS</li></Link></strong>
                <strong><Link to="/skills"><li id="skills-link">/SKILLS</li></Link></strong>
                <strong><Link to="/contact"><li id="contact-link">/CONTACT</li></Link></strong>
                
            </ul>
        </div>
    )
}