import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { terminalOutput } from "../../functions/terminalOutputter";
import { selectBodyText, selectSection, setBodyText, setSection } from "../Section/sectionBodySlice";


export default function Projects () {
    const dispatch = useDispatch();
    const section = useSelector(selectSection);
    const body = useSelector(selectBodyText);

    useEffect(() => {
        dispatch(setSection('Projects'));
        dispatch(setBodyText(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`))

        if (section === 'Projects' && body.length > 0) {
            setTimeout(() => {
                terminalOutput(section, body, 'projects-title', 'projects-body');
            }, 100);
        }
    }, [section, body]);


    return (
        <section id="projects">        
            <div className="section-body">
                <h2 id="projects-title"></h2>

                <p id="projects-body"></p>
            </div>
        </section>
    )
}