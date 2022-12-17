export function styleBeforeNavigate (target) {
    if (target.id === 'left') {
        target.parentNode.style.marginLeft = '120%';
    } else {
        target.parentNode.style.marginLeft = '-120%';
    }
}

export function arrowNavigate (target) {
    let i = 0;
    let props = undefined;
    for (let key of Object.keys(target)) {
        if (key.includes('Props')) {
            props = key;
            break;
        }
        i++;
    }
    return target[props].to;
}