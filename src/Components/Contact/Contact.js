import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import emailjs from '@emailjs/browser';
import { terminalOutput } from "../../functions/terminalOutputter";
import { selectBodyText, selectSection, setBodyText, setSection } from "../Section/sectionBodySlice";
import { arrowNavigate, styleBeforeNavigate, styleNavigatedFrom } from "../../functions/arrowNavigation";


import './contact.css';

import arrow from '../../images/arrow.svg';
import gitbash from '../../images/git-bash.svg';
import github from '../../images/skills/github.svg';
import gmail from '../../images/skills/gmail.svg';
import linkedin from '../../images/skills/linkedin.svg';

const serviceID = 'service_0yiyk7z';
const templateID = 'template_s1lbpub';
const publicKey = 'V4Vz8ytcd9G4KaQlc';

export default function Contact () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const section = useSelector(selectSection);
    const body = useSelector(selectBodyText);
    const form = useRef();

    function sendEmail (e) {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        e.target.reset();
    }

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
            <img className="left-arrow" id="left" src={arrow} alt="navigate left" to="/skills" onClick={handleNavigation} />
            <div className="section-body">
                <div id="terminal">
                    <div id="terminal-background"></div>
                    <div id="top-frame"><img src={gitbash} alt="gitbash" /><p>MINGW64:/gb/portfolio/{section}</p></div>
                    <div id="terminal-output">
                        <h2 id="contact-title"> </h2>
                        <p id="contact-body"> </p>

                        <div id="contact-links-container">
                            <a href="https://www.linkedin.com/in/gabriel-bigelow-b37b24232/" target="_blank" rel="noreferrer"><img id="linkedin-link" src={linkedin} alt="LinkedIn" /></a>
                            <a href="mailto:gabriel@gabrielbigelow.com"><img id="gmail-link" src={gmail} alt="GitHub" /></a>
                            <a href="https://github.com/Gabriel-Bigelow" target="_blank"  rel="noreferrer"><img id="github-link" src={github} alt="GitHub" /></a>
                        </div>

                        <div id="contact-form-container">
                            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                                <input className="width100" id="name" name="name" type="text" placeholder="Name" required></input>
                                <input className="width100" id="email" name="email" type="email" placeholder="Email" required></input>
                                <textarea className="width100" id="message" name="message" type="text" placeholder="Message" required></textarea>
                                <input id="submit" type="submit" value="Send"></input>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <img className="right-arrow" id="right" src={arrow} alt="navigate right" to="/" onClick={handleNavigation} />
        </section>
    );
}