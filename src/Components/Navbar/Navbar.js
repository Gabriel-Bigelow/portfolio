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
                <li><Link id="about-link" to="/about"><strong>/ABOUT ME</strong></Link></li>
                <li><Link id="projects-link" to="/projects"><strong>/PROJECTS</strong></Link></li>
                <li><Link id="skills-link" to="/skills"><strong>/SKILLS</strong></Link></li>
                <li><Link id="contact-link" to="/contact"><strong>/CONTACT</strong></Link></li>
                
            </ul>
        </div>
    )
}