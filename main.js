//rgbString, hex, array, object

const red = Math.round(Math.random() * 255);
const green = Math.round(Math.random() * 255);
const blue = Math.round(Math.random() * 255);

function randomColorArray() {
    const colorObj = randomColorObj();
    const color = [colorObj.r, colorObj.g, colorObj.b];
    return color;
}

function randomColorHex() {
    const decToHex = dec => dec.toString(16);

    const colorObj = randomColorObj();

    const stringRed = decToHex(colorObj.r);
    const stringGreen = decToHex(colorObj.g);
    const stringBlue = decToHex(colorObj.b);

    const color = `#${stringRed}${stringGreen}${stringBlue}`;
    return color;
}

function randomColorRgbString() {
    const colorObj = randomColorObj();
    const color = `rgb(${colorObj.r},${colorObj.g},${colorObj.b})`;
    return color;
}

function randomColorObj() {
    
    const color = {
        r: red,
        g: green,
        b: blue
    }

    return color;
}

console.log(randomColorArray());
console.log(randomColorHex());
console.log(randomColorRgbString());
console.log(randomColorObj());
