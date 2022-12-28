import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { terminalDelay, terminalOutput } from "../../functions/terminalOutputter";
import { selectBodyText, selectSection, setBodyText, setSection } from "../Section/sectionBodySlice";

import "./projects.css";
import arrow from '../../images/arrow.svg'
import gitbash from '../../images/git-bash.svg';
import lurker from '../../images/projects/lurker.webp';
import lurkerVid from '../../images/projects/lurkerVid.webm';
import superBallMania from '../../images/projects/superBallMania.webp';
import superBallManiaVid from '../../images/projects/superBallManiaVid.webm';
import jammming from '../../images/projects/jammming.webp';
import jammmingVid from '../../images/projects/jammmingVid.mp4';

import { arrowNavigate, styleBeforeNavigate, styleNavigatedFrom } from "../../functions/arrowNavigation";
import { useNavigate } from "react-router";


function closeButton () {
    const closeButtons = document.getElementsByClassName('close-button');
    document.getElementById('favorite-projects').style.flexWrap = 'nowrap';

    for (let closeButton of closeButtons) {
        closeButton.style.opacity = 0;
        setTimeout(() => {
            closeButton.style.display = 'none';
        }, 500)
    }
}

export default function Projects () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const section = useSelector(selectSection);
    const body = useSelector(selectBodyText);

    let selectedProject;

    function handleNavigation ({target}, navigateFunction = navigate) {
        styleBeforeNavigate(target); 
        setTimeout(() => {
            navigateFunction(arrowNavigate(target));
        }, 100)
    }

    function handleMouseOver ({target}) {
        //enlarge the element that is moused over, and display the title and short, if it exists
        const container = document.getElementById(`${target.id}-container`);
        const video = document.getElementById(`${target.id}-video`);
        const title = document.getElementById(`${target.id}-title`);
        const short = document.getElementById(`${target.id}-short`);

        if (!selectedProject) {
            if (container) {
                container.style.width = "130%";
            }
            if (video) {
                video.play();
                video.style.width = "100%";
                video.style.zIndex = "2";
            }
            if (title) {
                title.style.opacity = 1;
                title.style.fontSize = '1.5rem';
            }
            if (short) {
                short.style.opacity = 1;
                short.style.fontSize = '1.15rem';     
            }    
        }
    }
    
    function handleClick ({target}) {
        //enlarge and focus the element that is moused over, and display the full project container, if it is a project
        //else unfocus any focused projects
        if (target.parentElement.id.includes('container')) {
            selectedProject = target.parentElement.id.slice(0, target.parentElement.id.length - 10);
        } else if (selectedProject && !target.parentElement.id.includes(selectedProject)) {
            selectedProject = undefined;
        }
        
        const containers = document.getElementsByClassName('project');
        const longs = document.getElementsByClassName('project-long');
        const videos = document.getElementsByClassName('project-video');
        const titles = document.getElementsByClassName('project-title');
        const shorts = document.getElementsByClassName('project-short');
        
        if (selectedProject) {

            const targetLong = document.getElementById(`${selectedProject}-long`);

            const closeButtons = document.getElementsByClassName('close-button');
            for (let closeButton of closeButtons) {
                closeButton.style.display = 'block';
                setTimeout(() => {
                    closeButton.style.opacity = 1;
                }, 500)
            }
            



            for (let container of containers) {
                if (container.id !== `${selectedProject}-container`) {
                    container.style.width = '0%';
                    setTimeout(() => {
                        container.parentNode.style.flexWrap = 'wrap';
                    }, 500)
                } else {
                    container.style.width = "100%";
                }
            }

            for (let video of videos) {
                if (video.id !== `${selectedProject}-video`) {
                    video.style.zIndex = '0';
                    video.style.width = '95%';
                    video.pause();   
                } else {
                    video.play();
                    video.style.width = "100%";
                    video.style.zIndex = "2";   
                }
            }

            for (let title of titles) {
                if (title.id !== `${selectedProject}-title`) {
                    title.style.opacity = 0;
                    title.style.fontSize = 0;
                } else {
                    title.style.opacity = 1;
                    title.style.fontSize = '1.5rem';
                }
            }

            for (let short of shorts) {
                if (short.id !== `${selectedProject}-short`) {
                    short.style.fontSize = 0;
                    short.style.opacity = 0;
                } else {
                    short.style.fontSize = '1.15rem';
                    short.style.opacity = 1;
                }
            }

            
            if (targetLong) {
                targetLong.style.display = 'grid';
                setTimeout(() => {
                    targetLong.style.opacity = 1;
                }, 100)
                
            }

            //show long description of selected project
            for (let long of longs) {
                if (long !== targetLong) {
                    long.style.opacity = 0;
                    setTimeout(() => {
                        long.style.display = "none";
                    }, 500)
                }
            }
        } else {
            closeButton();

            for (let container of containers) {
                container.style.width = '100%';
            }

            //hide long descriptions
            for (let long of longs) {
                long.style.opacity = 0;
                setTimeout(() => {
                    long.style.display = "none";
                }, 500)
            }
        }
    }

    //stops video from being played when mouse is not over top of a project, and brings the preview image back to the front.
    function stopVideoPreview ({target}) {
        const targetVideo = document.getElementById(`${target.id}-video`);

        const videos = document.getElementsByClassName('project-video');
        const projects = document.getElementsByClassName('project');
        const titles = document.getElementsByClassName('project-title');
        const descriptions = document.getElementsByClassName('project-short');


        if (!selectedProject) {

            
            for (let video of videos) {
                if (video !== targetVideo) {
                    video.style.zIndex = '0';
                    video.style.width = '95%';
                    video.pause();
                }
            }

            for (let project of projects) {
                if (project.id !== `${target.id}-container` && !selectedProject) {
                    project.style.width = '100%';
                }
            }

            for (let title of titles) {
                if (title.id !== `${target.id}-title`) {
                    title.style.opacity = 0;
                    title.style.fontSize = 0;
                }
            }

            for (let description of descriptions) {
                if (description.id !== `${target.id}-short`) {
                    description.style.opacity = 0;
                    description.style.fontSize = 0;
                }
            }
        }
    }

    useEffect(() => {
        dispatch(setSection('Projects'));
        dispatch(setBodyText(`My favorite projects always involve challenging myself, 
        because they make me a better developer and scratch my itch for learning. <br><br> Here are some of my favorite projects:`))

        if (section === 'Projects' && body.length > 0) {
            setTimeout(() => {
                terminalOutput(section, body, 'projects-title', 'projects-body');
                document.getElementById('terminal-output').style.gridColumn = "1 / span 2";
            }, terminalDelay);
            styleNavigatedFrom();
        }
    }, [section, body, dispatch]);


    return (
        <section id="projects" onMouseOver={stopVideoPreview} onClick={handleClick}>

            <img className="left-arrow" id="left" src={arrow} alt="navigate left" to="/about" onClick={handleNavigation} />

            <div className="section-body">
                <div id="terminal">
                    <div id="terminal-background"></div>
                    <div id="top-frame"><img src={gitbash} alt="gitbash"/><p>MINGW64:/gb/portfolio/{section}</p></div>
                    <div id="terminal-output">
                        <h2 id="projects-title"> </h2>
                        <p id="projects-body"> </p>
                    </div>
                </div>

                <div id="favorite-projects">
                    <button className="close-button" id="close-button-1">X</button>
                    <button className="close-button" id="close-button-2">Hide Project Details</button>

                    <div className="project" id="lurker-container" onMouseOver={handleMouseOver}>
                        <div className="project-cover" id="lurker"></div>
                        <video className="project-video" id="lurker-video" loop>
                            <source src={lurkerVid}></source>
                        </video>
                        <img className="project-image" id="lurker-image" alt="Lurker project preview" src={lurker}/>
                        <h3 className="project-title" id="lurker-title">Lurker</h3>
                        <h4 className="project-short" id="lurker-short">Lurker is a React app that uses the Reddit API to 
                        create a streamlined "lurker" version of Reddit, enhancing user experience by removing unessential elements.</h4>
                        <div className="project-long" id="lurker-long">
                            <p>Lurker is Reddit clone built with React/Redux that forgoes all the unneccessary elements of the main Reddit site that a "lurker" would not need. By narrowing
                                down the displayed content to only posts, upvotes, comments, and a subreddit list, the user has a much more streamlined and content-focused experience with Reddit.
                                Users can still browse Reddit in the exact same way that they normally would, sans advertisements and all the buttons and features that the majority of users rarely access,
                                such as posting, commenting, account settings, etc..
                            </p>
                            <p>Users can still browse Reddit in the exact same way they would on the main site, as the data is displayed in the same fashion that they are used to, with improvements:</p>
                            <ul id="lurker-list">
                                <li>Initial load times are noticeably better.</li>
                                <li>Night Mode (dark theme) is built directly into the navigation bar for late-night browsing.</li>
                                <li>The default popular Subreddit bar shows the top 25 most subscribed-to Subreddits, rather than an arbitrary list of subreddits.</li>                    
                                <li>All posts are preloaded with top comments and rendered along with the post, so they can be accessed and read without having to navigate to a separate page, or open a new tab, decreasing overall load times, and user experience by removing the need to load an entirely new page and then scroll down to the comments.</li>
                                <li>Text posts show up to 3 top comments by default, to increase the content of a text post (such as an AskReddit thread), without the need for user interaction.</li>
                                <li>Image posts can be enlarged without navigating to a new page.</li>
                                <li>Image gallery posts can be accessed without navigating to a new page.</li>
                                <li>All video posts can be accessed without navigating to a new page.</li>
                                <li>Hyperlink posts access the website directly from the post container, given abiding XSS permissions.</li>
                                <li>Navigating to different areas of the site is much more seamless, with the current page not changing to the next page until the next page is loaded.</li>
                                <li>Subreddits can be accessed directly from a post, without the need to load another page.</li>
                                <li>The search function can be used to find posts with a single input.</li>
                            </ul>
                            <a className="satblue" href="https://reddit-lurker.netlify.app/">See Lurker in action here!</a> 
                            <br></br>

                            <a className="satblue" href="https://github.com/Gabriel-Bigelow/reddit-client">Check out Lurker's GitHub repository.</a>
                            <p>This was one of my favorite projects because it improved upon a product that I already enjoy. It also helped me solidify my understanding of React and Redux, as 
                                well as a working with APIs. Along with bettering my skills in React/Redux, I communicated regularly with a peer that was building a similar website, in which we helped each other
                                talk through the problems we were having, and point out bugs to each other. Throughout this communication and production process, I learned a great deal about structuring a project, effectively communicating
                                ideas to a peer, time management, and efficient programming.
                                Overall, it was a pleasant preview of what it is like to work in a team, which I'm very excited for.
                            </p>
                            <br></br>
                            <br></br>
                        </div>
                    </div>

                    <div className="project" id="super-ball-mania-container" onMouseOver={handleMouseOver}>
                        <div className="project-cover" id="super-ball-mania"></div>
                        <video className="project-video" id="super-ball-mania-video" loop>
                            <source src={superBallManiaVid}></source>
                        </video>
                        <img className="project-image" id="super-ball-mania-image" alt="Super Ball Mania project preview" src={superBallMania}/>
                        <h3 className="project-title" id="super-ball-mania-title">Super Ball Mania</h3>
                        <h4 className="project-short" id="super-ball-mania-short">Super Ball Mania is a JavaScript-based game written using the
                        HTML canvas element, vanilla JavaScript, along with other HTML and CSS.</h4>
                        <div className="project-long" id="super-ball-mania-long">
                            <iframe width="70%" height="300px" src="https://www.youtube.com/embed/0oGnMlXCTE8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p> Super Ball Mania is a JavaScript-based multiplayer party game that utilizes the HTML canvas element, Gamepad API, and vanilla JavaScript. 
                                It was originally written for myself and a couple friends, but after having so much fun with it, I decided to release it on the major 
                                global software-distribution platform, Steam, where it has since amassed over 10,000 unique users and positive reviews.
                                <br></br>
                                <br></br>
                                The game is playable with up to 8 players (4 gamepads and 4 keyboard players OR 8 gamepads, with the assistance of a third-party controller grouping software such as reWASD)
                                who will duke it out in 10 unique minigames, competing to have the most total points by the end of the game. The game also has working online-multiplayer through the use of Steam Remote Play Together.
                                </p>
                                <a className="satblue" href="https://store.steampowered.com/app/2101990/Super_Ball_Mania/">Check it out on Steam here!</a>
                                <br></br>
                                <a className="satblue" href="https://super-ball-mania.netlify.app/">Or check out the browser version here</a>
                                <br></br>
                                
                                <a className="satblue" href="https://github.com/Gabriel-Bigelow/super-ball-mania">Here is a link to the GitHub repository!</a>
                                
                            <p>
                                This was one of my favorite projects because it was my first experience releasing a product to a considerable userbase. It involves something that I'm passionate about: videogames! This taught me several things, such as the importance
                                of thoroughly testing edge cases in your code before release, how to use software packagers, bundlers, and push that software to an external database.
                                I had a lot of fun squashing bugs for my users and ensuring that their experience with my product was a pleasant one, whether those bugs were brought to my attention by
                                direct messages, comments, or my own personal testing.
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </p>
                        </div>
                    </div>

                    <div className="project" id="jammming-container" onMouseOver={handleMouseOver}>
                        <div className="project-cover" id="jammming"></div>
                        <video className="project-video" id="jammming-video" loop>
                            <source src={jammmingVid}></source>
                        </video>
                        <img className="project-image" id="jammming-image" alt="Super Ball Mania project preview" src={jammming}/>
                        <h3 className="project-title" id="jammming-title">Jammming</h3>
                        <h4 className="project-short" id="jammming-short">Jammming is a playlist generating app written using
                        React native, HTML, CSS, and the Spotify API.</h4>
                        <div className="project-long" id="jammming-long">
                            <p> Jammmming is a single-page application written with React, that takes advantage of the Spotify API to handle playlist creation, cloning, and deletion.
                                When a user first visits Jammming, they will be prompted to authorize the application to make changes to their Spotify account, so that it can pull their
                                current playlists, in order to update, clone, or delete them, as well as add brand-new playlists, based on user actions.
                                </p>
                                <a className="satblue" href="https://jammming-to-music.netlify.app/">Check it out here!</a>
                                <br></br>                                
                                <a className="satblue" href="https://github.com/Gabriel-Bigelow/jammming">Here is a link to the GitHub repository!</a>
                            <p>
                                This was one of my favorite projects because it was my first experience creating an app with API integration, as well as OAuth2 authentication. 
                                Although initially challenging, it taught me many things throughout, such as how to read API documentation, as well as how to work with authentication. 
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </p>
                        </div>
                    </div>

                    
                </div>

                
            </div>




            <img className="right-arrow" id="right" src={arrow} alt="navigate right" to="/skills" onClick={handleNavigation} />
        </section>
    )
}