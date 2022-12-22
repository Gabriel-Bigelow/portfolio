let sectionChars = 0;
let bodyChars = 0;

let animationHalt = false;

export const terminalDelay = 500;

//reset animation variables function to be passed to the Section actions
export function resetTextAnimation () {
    sectionChars = 0;
    bodyChars = 0;
}

//reset animation status function to be passed to the Section actions
export function animationStatus (status) {
    animationHalt = status;
}

//output characters on screen a few characters at a time like an old-timey terminal. Recursive function that calls itself until all characters are output, speeding up for
//the body paragraph, which will have more characters than the title.
export function terminalOutput (section, body, sectionId, bodyId, extraFunction) {
    let sectionThemed = '<span class="satblue">$</span> node <span class="gold">' + section + '.js</span>'
    
    let sectionSlice;
    let bodySlice;
    setTimeout(() => {
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
            sectionChars += 0.125;
        } 
        if (sectionChars >= sectionThemed.length + 2 && bodyChars < body.length){
            bodyChars += 10;
        }

        sectionSlice = sectionThemed.slice(0, Math.floor(sectionChars));
        bodySlice = body.slice(0, bodyChars);

        if (!animationHalt && document.getElementById(sectionId)) {
            if (sectionSlice.length > 0 && sectionSlice.length < sectionThemed.length) {
                document.getElementById(sectionId).innerHTML = sectionSlice;
            } else if (sectionSlice.length > 0 && sectionSlice.length >= sectionThemed.length){
                document.getElementById(sectionId).innerHTML = sectionSlice
            }
            if (bodySlice.length > 0 && document.getElementById(bodyId)) {
                document.getElementById(bodyId).innerHTML = bodySlice;
            }
        }



        if ((sectionChars >= section.length && bodyChars >= body.length) || animationHalt) {
            if (extraFunction && document.getElementById(bodyId)) {
                extraFunction();
            }
            return;
        }

        terminalOutput(section, body, sectionId, bodyId, extraFunction);
    }, 1000/120)
}