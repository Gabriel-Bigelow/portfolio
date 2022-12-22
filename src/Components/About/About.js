import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { arrowNavigate, styleBeforeNavigate, styleNavigatedFrom } from "../../functions/arrowNavigation";
import { terminalDelay, terminalOutput } from "../../functions/terminalOutputter";
import {  selectBodyText, selectSection, setBodyText,setSection } from "../Section/sectionBodySlice"
import './about.css';
import arrow from '../../images/arrow.svg'
import gitbash from '../../images/git-bash.svg';
import cert from '../../images/about/certification.webp';
import headshot from '../../images/about/headshot.webp';

//function to add some props / styling to "helloWorld.js" strong element after it renders.
function afterOutput() {
    document.getElementById('helloWorld').onclick = helloWorld;
    document.getElementById('helloWorld').style.cursor = "pointer";
}

//cheeky hello world function
function helloWorld () {
    alert('Hello World! :)');
}

export default function About () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const section = useSelector(selectSection);
    const body = useSelector(selectBodyText);

    function handleNavigation ({target}, navigateFunction = navigate) {
        styleBeforeNavigate(target); 
        setTimeout(() => {
            navigateFunction(arrowNavigate(target));
        }, 300)
    }





    useEffect(() => {
        
        if (section !== 'AboutMe') {
            dispatch(setSection('AboutMe'));
            dispatch(setBodyText(`My name is Gabriel Bigelow. I am a Front-End Developer from Toledo, Ohio.
            <br><br>
            I discovered my enthusiasm for programming just over 1 year ago. I stumbled upon the desire to learn to code while helping my brother start a 
            pet market business, in which we had regular contact with web developers. I've always loved computers and technology, but until that 
            point had not taken an interest in the programming side of things. 
            <br><br>
            I decided to look into some free online coding classes, and it was love at first
            <strong id="helloWorld" class="gold">helloWorld.js</strong>. I began on KhanAcademy, before exhausting those resources and migrating to 
            Codecademy, where I enrolled in the Pro courses, exited my full time job, and earned certificates in pursuit of my career in programming.`));
        }


        if (section === 'AboutMe' && body.length > 0) {
            setTimeout(() => {
                terminalOutput(section, body, 'about-me-title', 'about-me-body', afterOutput);
            }, terminalDelay);
            styleNavigatedFrom();
        }
    }, [section, body, dispatch]);

    return (
        <section id="about">
            <img className="left-arrow" id="left" src={arrow} alt="navigate left" to="/" onClick={handleNavigation} />
            <div className="section-body">
                <div id="terminal">
                    <div id="terminal-background"></div>
                    <div id="headshot">
                        <img className="terminal-image" src={headshot} alt="A nice, handsome young man"/>
                    </div>
                    <div id="top-frame"><img src={gitbash} alt="gitbash" /><p>MINGW64:/gb/portfolio/{section}</p></div>
                    <div id="terminal-output">
                        
                        <h2 id="about-me-title"> </h2>
                        <p id="about-me-body"> </p>
                        <div id="cert-container">
                            <img className="terminal-image" src={cert} alt="certficate of completion for the Front-End Engineer course"/>
                        </div>
                        
                    </div>
                </div>
            </div>

            <img className="right-arrow" id="right" src={arrow} alt="navigate right" to="/projects" onClick={handleNavigation} />
        </section>
    )
}

