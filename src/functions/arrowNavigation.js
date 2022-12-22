let navigatedFrom = '';

//slide the navigated-from section off screen, based on the direction it was navigated from, before loading the next section.
export function styleBeforeNavigate (target) {
    if (target.id === 'left') {
        target.parentNode.style.marginLeft = `${parseFloat(target.parentNode.getBoundingClientRect().width)*1.5}px`;
        navigatedFrom = 'left';
    } else {
        target.parentNode.style.marginLeft = `${parseFloat(target.parentNode.getBoundingClientRect().width)*-1.5}px`;
        navigatedFrom = 'right';
    }
}

//start the navigated-to section off-screen and slide it in, based on the direction it was navigated to from.
export function styleNavigatedFrom () {
    if (!document.querySelectorAll('section')[0].style.marginLeft) {
        if (navigatedFrom === 'left') {
            document.querySelectorAll('section')[0].style.marginLeft = '-120%';
            document.querySelectorAll('section')[0].style.transitionDuration = '0.3s';
        } else if (navigatedFrom === 'right') {
            document.querySelectorAll('section')[0].style.marginLeft = '120%';
            document.querySelectorAll('section')[0].style.transitionDuration = '0.3s';
        }
    }

    setTimeout(() => {
        document.querySelectorAll('section')[0].style.transitionDuration = '0.3s';
        document.querySelectorAll('section')[0].style.marginLeft = 0;
    }, 100);
}

//returns the to / href prop of the current arrow, to pass to the useNavigate function.
export function arrowNavigate (target) {
    let props = undefined;
    for (let key of Object.keys(target)) {
        if (key.includes('Props')) {
            props = key;
            break;
        }
    }
    return target[props].to;
}