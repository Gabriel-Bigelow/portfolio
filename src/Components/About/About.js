import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loop } from "../../functions/terminalOutputter";
import {  selectBodyText, selectSection, setBodyText,setSection } from "../Section/sectionBodySlice"


export default function About () {
    const dispatch = useDispatch();
    const section = useSelector(selectSection);
    const body = useSelector(selectBodyText);


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
                loop(section, body, 'about-me-title', 'about-me-body');
            }, 100);
        }
    }, [section, body]);

    return (
        <section id="about">        
            <div className="section-body">
                <h2 id="about-me-title"></h2>

                <p id="about-me-body"></p>
            </div>
        </section>
    )
}

