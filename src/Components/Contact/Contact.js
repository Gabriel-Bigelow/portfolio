import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { terminalOutput } from "../../functions/terminalOutputter";
import { selectBodyText, selectSection, setBodyText, setSection } from "../Section/sectionBodySlice";
import { arrowNavigate, styleBeforeNavigate, styleNavigatedFrom } from "../../functions/arrowNavigation";

import './contact.css';

import arrow from '../../images/arrow.svg';
import gitbash from '../../images/git-bash.svg';

export default function Contact () {
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
        dispatch(setSection('Contact'));
        dispatch(setBodyText(`Let's get in touch.`))

        if (section === 'Contact' && body.length > 0) {
            setTimeout(() => {
                terminalOutput(section, body, 'contact-title', 'contact-body');
                document.getElementById('terminal-output').style.gridColumn = "1 / span 2";
            }, 100);
            styleNavigatedFrom();
        }
    }, [section, body, dispatch]);

    return (



        <section id="contact">        
            <img className="left-arrow" id="left" src={arrow} alt="navigate left" to="/projects" onClick={handleNavigation} />
            <div className="section-body">
                <div id="terminal">
                    <div id="terminal-background"></div>
                    <div id="top-frame"><img src={gitbash} alt="gitbash" /><p>MINGW64:/gb/portfolio/{section}</p></div>
                    <div id="terminal-output">
                        <h2 id="contact-title"> </h2>
                        <p id="contact-body"> </p>


                        <div id="contact-form-container">
                            <form id="contact-form">
                                <input className="width100" id="name" type="text" placeholder="Name" required></input>
                                <input className="width100" id="email" type="email" placeholder="Email" required></input>
                                <textarea className="width100" id="message" type="text" placeholder="Message" required></textarea>
                                <input id="submit" type="submit" value="Send"></input>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <img className="right-arrow" id="right" src={arrow} alt="navigate right" to="/contact" onClick={handleNavigation} />
        </section>
        
    );
}