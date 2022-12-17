import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { terminalOutput } from "../../functions/terminalOutputter";
import { selectBodyText, selectSection, setBodyText,setSection } from "../Section/sectionBodySlice"
import { animateHome, resetAnimation } from "./homeAnimation";

import './home.css';
import arrow from "../../images/arrow.svg";
import city from "../../images/city.png";
import crane from "../../images/crane2.png";
import { Link, useNavigate } from "react-router-dom";
import { arrowNavigate, styleBeforeNavigate } from "../../functions/arrowNavigation";

export default function Home () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const section = useSelector(selectSection);
    const body = useSelector(selectBodyText);
    
    useEffect(() => {
        if (section !== 'home') {
            resetAnimation();
            dispatch(setSection('home'));
            dispatch(setBodyText(''));
        } else {
            animateHome();
        };
    }, [body, section, dispatch]);

    function handleNavigation ({target}, navigateFunction = navigate) {
        styleBeforeNavigate(target); 
        setTimeout(() => {
            navigateFunction(arrowNavigate(target));
        }, 1000)
    }

    return (
        <section id="home">
            <div id="glow" className="home-body">
                <div id="city-glow">
                    <h1 id="title0">Gabriel Bigelow</h1>
                    <h3 id="home-subtitle">Software engineer, full-stack developer</h3>
                    <div id="home-animation">
                    </div>
                    <img src={city} alt="a silhouette of a city"></img>
                </div>
                <img className="left-arrow" src={arrow} alt="navigate left"/>
                <img className="right-arrow" src={arrow} alt="navigate right"/>
            </div>
            
            <div id="foreground" className="home-body">
                <h1 id="title1">Gabriel Bigelow</h1>
                <h3 id="home-subtitle">Software engineer, full-stack developer</h3>
                <div id="home-animation">
                    <div className="home-animation-container" id="hae-left"><h4 id="hae1">Let's</h4></div>
                    <div className="home-animation-container" id="hae-center"><h4 id="hae2">Build</h4></div>
                    <div className="home-animation-container" id="hae-right"><h4 id="hae3">Together.</h4></div>
                </div>
                
                <div>
                    <img src={city} alt='a silhouette of a city'></img>
                    <div id="crane">
                        <img src={crane} alt="a silhouette of a crane"/>
                    </div>
                </div>
            </div>
            <img className="left-arrow" id="left" src={arrow} alt="navigate left" to="/contact" onClick={handleNavigation} />
            <img className="right-arrow" id="right" src={arrow} alt="navigate right" to="/about" onClick={handleNavigation} />
        </section>
    )
}