let sectionChars = 0;
let bodyChars = 0;

let animationHalt = false;

export function resetTextAnimation () {
    sectionChars = 0;
    bodyChars = 0;
}

export function animationStatus (status) {
    animationHalt = status;
}

export function terminalOutput (section, body, sectionId, bodyId) {
    let sectionThemed = '<span class="satblue">$</span> node <span class="gold">' + section + '.js</span>'
    
    let sectionSlice;
    let bodySlice;
    setTimeout(() => {
        console.log('terminalOutputing');
        if (sectionChars === 0) {
            sectionChars += 31;
        }
        if (sectionChars === 35) {
            sectionChars += 20;
        }
        if (sectionChars === 55 + section.length + 3) {
            sectionChars += 7;
        }
        if (sectionChars < sectionThemed.length + 2) {
            sectionChars += 0.25;
        } 
        if (sectionChars >= sectionThemed.length + 2 && bodyChars < body.length){
            bodyChars += 20;
        }

        sectionSlice = sectionThemed.slice(0, Math.floor(sectionChars));
        bodySlice = body.slice(0, bodyChars);

        if (!animationHalt) {
            if (sectionSlice.length > 0 && sectionSlice.length < sectionThemed.length) {
                document.getElementById(sectionId).innerHTML = sectionSlice;
            } else if (sectionSlice.length > 0 && sectionSlice.length >= sectionThemed.length){
                document.getElementById(sectionId).innerHTML = sectionSlice
            }
            if (bodySlice.length > 0) {
                document.getElementById(bodyId).innerHTML = bodySlice;
            }
        }



        if ((sectionChars >= section.length && bodyChars >= body.length) || animationHalt) {
            console.log('stop animating, please :(');
            return;
        }

        terminalOutput(section, body, sectionId, bodyId);
    }, 1000/60)
}













































/*function checkAnimationStatus () {
        if (!runAnimationStatus()) {
            setTimeout(() => {
                checkAnimationStatus();
                console.log('no animating')
            }, 1000/60);
        } else if (runAnimationStatus() && bodyChars < body.length) {
            animate();
        }

    }*/


/*


//const animateText = useSelector(selectAnimateText);
    let animateText = false;
    const rendered = useSelector(selectRendered);
    let displayBody = false;
    let sectionChars = 0;
    let bodyChars = 0;
    let frame = 0;

    let bodyTextSlice = '';

    function animateSectionText () {
        if (section && bodyText && animateText) {
            if (sectionChars < section.length) {
                setTimeout(() => {
                    sectionChars++;
                    document.getElementById('section-title').innerHTML = section.slice(0, sectionChars);
                    animateSectionText();
                }, 1000/20);
            } else if (!displayBody){
                setTimeout(() => {
                    displayBody = true;
                    animateSectionText();
                }, 500)
            }

            if (bodyChars < bodyText.length && displayBody) {
                setTimeout(() => {
                    bodyChars+= 2;
                    document.getElementById('section-body-paragraph').innerHTML = bodyText.slice(0, bodyChars);
                    animateSectionText();
                }, 1000/(bodyText.length/5));
            }
        }
    }

    function animateTextFunction() {
        if (bodyChars < bodyText.length && animateText && frame % 4 === 0) {
            bodyChars+=4;
            //document.getElementById('section-body-paragraph').innerHTML = bodyTextSlice//bodyText.slice(0, bodyChars);
        }

        if (!animateText) {
            console.log(animateText);
            //document.getElementById('section-body-paragraph').innerHTML = bodyTextSlice;
        }
    }

    function sliceBodyText () {
        if (bodyChars <= bodyText.length) {
            bodyTextSlice = bodyText.slice(0, bodyChars);
        }
    }

    function affectHTML () {
        if (animateText) {
            document.getElementById('section-body-paragraph').innerHTML = bodyTextSlice;
        }
        console.log(bodyTextSlice);
        
    }

    function animate () {
        if (animateText) {
            setTimeout(() => {

                animateTextFunction();
                sliceBodyText();
                affectHTML();
    
                frame++;
                if (frame > 999) {
                    frame = 0;
                }
                animate();
            }, 1000/1000);
        }
    }



    useEffect(() => {
        dispatch(setRendered(true));
    }, []);

    useEffect(() => {
        setTimeout(() => {
            animateText = true;
            document.getElementById('section-body-paragraph').style.display = 'block';
        }, 1500);

        if (rendered) {
            animate();
        }
    }, [section, bodyText])
    */