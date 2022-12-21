import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { arrowNavigate, styleBeforeNavigate, styleNavigatedFrom } from "../../functions/arrowNavigation";
import { terminalOutput } from "../../functions/terminalOutputter";
import { selectBodyText, selectSection, setBodyText, setSection } from "../Section/sectionBodySlice";
import './skills.css';
import arrow from '../../images/arrow.svg'
import accessibility from '../../images/skills/accessibility.svg';
import cmd from '../../images/skills/cmd.svg';
import css from '../../images/skills/css.svg';


import git from '../../images/skills/git.svg';
import gitbash from '../../images/git-bash.svg';
import github from '../../images/skills/github.svg';
import html from '../../images/skills/html.svg';

import javascript from '../../images/skills/javascript.svg';
import node from '../../images/skills/node.svg';
import npm from '../../images/skills/npm.svg';
import vsCode from '../../images/skills/vsCode.svg';


export default function Skills () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const section = useSelector(selectSection);
    const body = useSelector(selectBodyText);

    function handleNavigation ({target}, navigateFunction = navigate) {
        styleBeforeNavigate(target); 
        setTimeout(() => {
            navigateFunction(arrowNavigate(target));
        }, 100)
    }



    useEffect(() => {
        dispatch(setSection('Skills'));
        dispatch(setBodyText(`These are the technologies that I use!
        <ul>
        <li><span class="list-header">Front-End</span><ul>
                <li>JavaScript (vanilla, React, Redux)</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul></li>
        <li><span class="list-header">Back-End</span><ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
            </ul></li>
        <li><span class="list-header">Development Tools and Skills</span><ul>
            <li>Visual Studio Code</li>
            <li>Node Package Manager</li>
            <li>Chrome Dev Tools</li>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>Postbird</li>
            <li>Accessibility</li>
            </ul></li>
    </ul>
        `))

        if (section === 'Skills' && body.length > 0) {
            setTimeout(() => {
                terminalOutput(section, body, 'skills-title', 'skills-body');
                document.getElementById('terminal-output').style.gridColumn = "1 / span 2";
            }, 100);
            styleNavigatedFrom();
        }
    }, [section, body]);



    return (



        <section id="skills">        
            <img className="left-arrow" id="left" src={arrow} alt="navigate left" to="/projects" onClick={handleNavigation} />
            <div className="section-body">
                <div id="terminal">
                    <div id="terminal-background"></div>
                    <div id="top-frame"><img src={gitbash} /><p>MINGW64:/gb/portfolio/{section}</p></div>
                    <div id="terminal-output">
                        <h2 id="skills-title"></h2>
                        <div id="list-container"><p id="skills-body"></p></div>
                        
                        <div id="skills-container">
                            <div id="row1">
                                <img className="skill-img" alt="JavaScript" src={javascript} />
                                <img className="skill-img" alt="HTML" src={html} />
                                <img className="skill-img" alt="CSS" src={css} />
                                <img className="skill-img" alt="NPM" src={npm} />
                                <img className="skill-img" alt="JavaScript" src={gitbash} />
                                
                                
                            </div>
                            <div id="row2">
                                <img className="skill-img" alt="JavaScript" src={vsCode} />
                                <img className="skill-img colorize-svg" alt="JavaScript" src={node} />
                                <img className="skill-img white-svg" alt="GitHub" src={github} />
                                <img className="skill-img white-svg" alt="JavaScript" src={cmd} />
                                <img className="skill-img" alt="JavaScript" src={accessibility} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <img className="right-arrow" id="right" src={arrow} alt="navigate right" to="/contact" onClick={handleNavigation} />
        </section>
        
    );
}