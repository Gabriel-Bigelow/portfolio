import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loop } from "../../functions/terminalOutputter";
import { selectBodyText, selectSection, setBodyText,setSection } from "../Section/sectionBodySlice"

import './home.css';

let firstLoad = true;

export default function Home () {
    let loaded = false;
    const dispatch = useDispatch();
    const section = useSelector(selectSection);
    const body = useSelector(selectBodyText);
    
    useEffect(() => {
        if (section !== 'home') {
            dispatch(setSection('home'));
            dispatch(setBodyText(''));
        }        
    }, [body, section, dispatch]);

    return (
        <section id="home">
            <div id="left-arrow">&lt;</div><div id="right-arrow">&gt;</div> 
            <div className="section-body">
                    <h1>Gabriel Bigelow</h1>
                    <h3 id="home-subtitle">Software engineer, full-stack developer</h3>
            </div>
             
        </section>
    )
}

//<h1 id="home-title" className="satblue home-title">Gabriel Bigelow</h1>
