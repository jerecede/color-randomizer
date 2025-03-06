
function randomColorArray() {
    const colorObj = randomColorObj();
    return [colorObj.r, colorObj.g, colorObj.b];
}

function randomColorHex() {
    const decToHex = dec => dec.toString(16).padStart(2, '0');

    const colorObj = randomColorObj();

    // const rHex = ('0' + decToHex(colorObj.r)).slice(-2);
    // const gHex = ('0' + decToHex(colorObj.g)).slice(-2);
    // const bHex = ('0' + decToHex(colorObj.b)).slice(-2);

    const rHex = decToHex(colorObj.r);
    const gHex = decToHex(colorObj.g);
    const bHex = decToHex(colorObj.b);

    return `#${rHex}${gHex}${bHex}`;
}

function randomColorRgbString() {
    const colorObj = randomColorObj();
    return `rgb(${colorObj.r}, ${colorObj.g}, ${colorObj.b})`;
}

function randomColorObj() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = {
        r: red,
        g: green,
        b: blue
    }

    return color;
}