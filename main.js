//rgbString, hex, array, object



function randomColorArray() {
    const colorObj = randomColorObj();
    const color = [colorObj.r, colorObj.g, colorObj.b];
    return color;
}

function randomColorHex() {
    const decToHex = dec => dec.toString(16);

    const colorObj = randomColorObj();

    const rHex = decToHex(colorObj.r);
    const gHex = decToHex(colorObj.g);
    const bhex = decToHex(colorObj.b);

    const color = `#${rHex}${gHex}${bhex}`;
    return color;
}

function randomColorRgbString() {
    const colorObj = randomColorObj();
    const color = `rgb(${colorObj.r}, ${colorObj.g}, ${colorObj.b})`;
    return color;
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

console.log(randomColorObj());
console.log(randomColorArray());
console.log(randomColorRgbString());
console.log(randomColorHex());

