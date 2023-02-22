import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { arrowNavigate, styleBeforeNavigate, styleNavigatedFrom } from "../../functions/arrowNavigation";
import { terminalDelay, terminalOutput } from "../../functions/terminalOutputter";
import {  selectBodyText, selectSection, setBodyText,setSection } from "../Section/sectionBodySlice"
import './about.css';
import arrow from '../../images/arrow.svg'
import gitbash from '../../images/git-bash.svg';
import cert1 from '../../images/about/full-stack-cert.webp';
import cert2 from '../../images/about/front-end-cert.webp';
import headshot from '../../images/about/headshot.webp';
import resumeLogo from '../../images/about/resumeLogo.webp';
import resume from './resume.pdf'

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
            dispatch(setBodyText(`
            My name is Gabriel Bigelow. I am a Full Stack Developer from Toledo, Ohio.
            <br><br>
            I discovered my enthusiasm for programming in the summer of 2021 while helping my brother start a business,
            in which we had regular contact with web developers. Having always loved computers and technology, I decided to look into online coding classes, and it was love at first
            <strong id="helloWorld" class="gold">helloWorld.js</strong>. I have since received certification for Full Stack Engineering, Front-End Development, and am continuing my education
            with the extended Back-End Development course at Codecademy.
            <br><br>

            I love learning, taking on challenges, and creating solutions. My goal is to work in a team-based environment to further develop and sharpen my skills.
            I am open to in-person roles in NW Ohio and SE Michigan, as well as remote positions.
            `));
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
                    <div id="side-images">
                        <div className="side-image">
                            <img  src={headshot} alt="A nice, handsome young man"/>
                        </div>
                        <div className="side-image">
                            <a href={resume} target="_blank" rel="noreferrer"><img  id="resume-logo" src={resumeLogo} alt="Gabriel Bigelow's resume link"/></a>
                        </div>
                    </div>

                    <div id="top-frame"><img src={gitbash} alt="gitbash" /><p>MINGW64:/gb/portfolio/{section}</p></div>

                    <div id="terminal-output">
                        <h2 id="about-me-title"> </h2>
                        <p id="about-me-body"> </p>
                        <div id="cert-container">
                            <a href="https://www.codecademy.com/profiles/Icy-Rex/certificates/ffd0f42cce1a44e9a0108b365047a0a6" target='_blank' rel="noreferrer"><img className="terminal-image" src={cert1} alt="certficate of completion for the Front-End Engineer course"/></a>
                            <a href="https://www.codecademy.com/profiles/Icy-Rex/certificates/5f85dd867b67b60014ac9ea3" target='_blank' rel="noreferrer"><img className="terminal-image" src={cert2} alt="certficate of completion for the Front-End Engineer course"/></a>
                        </div>
                    </div>
                </div>
            </div>

            <img className="right-arrow" id="right" src={arrow} alt="navigate right" to="/projects" onClick={handleNavigation} />
        </section>
    )
}

