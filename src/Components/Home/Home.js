import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBodyText, selectSection, setBodyText,setSection } from "../Section/sectionBodySlice"
import { animateHome, resetAnimation } from "./homeAnimation";

import './home.css';
import arrow from "../../images/arrow.svg";
import city from "../../images/home/city.png";
import crane from "../../images/home/crane.png";
import { useNavigate } from "react-router-dom";
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
            window.addEventListener('resize', () => {
                setTimeout(() => {
                    document.getElementById('home').style.height = `${window.innerHeight -  document.getElementById('navbar').getBoundingClientRect().height - 70}px`
                    setTimeout(() => {
                        document.getElementById('crane').style.height = `${document.getElementsByClassName('city')[0].getBoundingClientRect().height * 0.9}px`;
                    }, 100);
                }, 100)
            })
            setTimeout(() => {
                document.getElementById('home').style.height = `${window.innerHeight -  document.getElementById('navbar').getBoundingClientRect().height - 70}px`
                setTimeout(() => {
                    document.getElementById('crane').style.height = `${document.getElementsByClassName('city')[0].getBoundingClientRect().height * 0.9}px`;
                }, 100);
            }, 100)
;        };
   }, [body, section, dispatch]);

    function handleNavigation ({target}, navigateFunction = navigate) {
        styleBeforeNavigate(target); 
        setTimeout(() => {
            navigateFunction(arrowNavigate(target));
        }, 100)
    }

    return (
        <div id="home">
            <div id="glow" className="home-body">
            <div id="actual-glow"></div>
                <div id="city-glow">
                    <h1 className="home-title" id="title0">Gabriel Bigelow</h1>
                    <h3 className="home-subtitle" id="home-subtitle">Software engineer, Front-End Developer</h3>
                    <div id="home-animation"></div>
                    <img className="city" src={city} alt="a silhouette of a city" />
                </div>

                <img className="left-arrow" src={arrow} alt="navigate left"/>
                <img className="right-arrow" src={arrow} alt="navigate right"/>
            </div>
            
            <div id="foreground" className="home-body">
                <div id="not-glow">
                    <h1 className="home-title" id="title1">Gabriel Bigelow</h1>
                    <h3 className="home-subtitle" id="home-subtitle">Software engineer, Front-End Developer</h3>
                    <div id="home-animation">
                        <div className="home-animation-container" id="hae-left"><h4 id="hae1">Let's</h4></div>
                        <div className="home-animation-container" id="hae-center"><h4 id="hae2">Build</h4></div>
                        <div className="home-animation-container" id="hae-right"><h4 id="hae3">Together.</h4></div>
                    </div>
                    
                    <img className="city" src={city} alt='a silhouette of a city' width="100%"/>
                    <img id="crane" src={crane} alt="a silhouette of a crane"/>
                </div>
            </div>
            <img className="left-arrow" id="left" src={arrow} alt="navigate left" to="/contact" onClick={handleNavigation} />
            <img className="right-arrow" id="right" src={arrow} alt="navigate right" to="/about" onClick={handleNavigation} />
        </div>
    )
}