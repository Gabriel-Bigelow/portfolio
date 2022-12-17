import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { arrowNavigate, handleNavigation, styleBeforeNavigate } from "../../functions/arrowNavigation";
import { terminalOutput } from "../../functions/terminalOutputter";
import {  selectBodyText, selectSection, setBodyText,setSection } from "../Section/sectionBodySlice"
import arrow from '../../images/arrow.svg'



export default function About () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const section = useSelector(selectSection);
    const body = useSelector(selectBodyText);

    function handleNavigation ({target}, navigateFunction = navigate) {
        styleBeforeNavigate(target); 
        setTimeout(() => {
            navigateFunction(arrowNavigate(target));
        }, 1000)
    }


    useEffect(() => {
        if (section !== 'AboutMe') {
            dispatch(setSection('AboutMe'));
            dispatch(setBodyText(`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate 
            velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`));
        }


        if (section === 'AboutMe' && body.length > 0) {
            setTimeout(() => {
                terminalOutput(section, body, 'about-me-title', 'about-me-body');
            }, 100);
        }
    }, [section, body]);

    return (
        <section id="about">        
            <div className="section-body">
                <h2 id="about-me-title"></h2>

                <p id="about-me-body"></p>
            </div>
            <img className="left-arrow" id="left" src={arrow} alt="navigate left" to="/" onClick={handleNavigation} />
            <img className="right-arrow" id="right" src={arrow} alt="navigate right" to="/projects" onClick={handleNavigation} />
        </section>
    )
}

