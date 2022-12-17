let seconds = 0;
let frames = 0;

let animationStarted = false;
let startTime;
export function resetAnimation () {
    animationStarted = false;
}
export function animateHome () {
    if (!animationStarted) {
        animationStarted = true;
        startTime = Date.now();
    }
    const runTime = parseFloat(((Date.now() - startTime)/1000).toFixed(1));

    if (runTime === 0.5) {
        document.getElementById('hae-left').style.opacity = 1;
    }
    if (runTime === 0.7) {
        document.getElementById('hae1').style.marginRight = '.75rem';
    }
    if (runTime === 1) {
        document.getElementById('hae-center').style.opacity = 1;
    }
    if (runTime === 1.3) {
        document.getElementById('hae2').style.marginTop = '50px';
    }
    if (runTime === 1.5) {
        document.getElementById('hae-right').style.opacity = 1;
    }
    if (runTime === 1.8) {
        document.getElementById('hae3').style.marginLeft = '.75rem';
    }
    if (runTime > 2) {
        return;
    }

    setTimeout(() => {
            animateHome();
    }, 1000/60)
}