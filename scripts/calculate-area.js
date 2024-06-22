// get input value using id
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

// set value in a element using id
function setTextValueById(elementId, textValue) {
    const element = document.getElementById(elementId)
    element.innerText = textValue;
}

// calculate the geometric shape area
function calculateAreaOfGeometricShape(sideOneId, sideTwoId, showElementId, constant = 1) {
    // first sides of geometric shape
    const sideOne = getInputValueById(sideOneId);

    // second sides of geometric shape
    const sideTwo = getInputValueById(sideTwoId);

    // calculate area
    const area = constant * sideOne * sideTwo;

    // validate input
    if(isNaN(area) || (area < 0)){
        alert('Please Enter a Positive Number');
        return;
    }

    // set area into an element
    setTextValueById(showElementId, area.toFixed(2))

}


function calculateTriangleArea() {
    /*
    // get triangle base value
    const baseValue = getInputValueById('triangle-base')

    // get triangle height value
    const heightValue = getInputValueById('triangle-height')

    // calculate area
    const area = 0.5 * baseValue * heightValue

    // set triangle area
    setTextValueById('areaValue', area);
    */

    // calculate area using function
    calculateAreaOfGeometricShape('triangle-base', 'triangle-height', 'areaValue', 0.5);
}

function calculateRectangleArea() {
    /*
    // get rectangle length value
    const lengthValue = getInputValueById('rectangle-length');

    // get rectangle width value
    const widthValue = getInputValueById('rectangle-width');

    // calculate rectangle area
    const rectangleArea = lengthValue * widthValue;

    // set rectangle area
    setTextValueById('rectangleAreaValue', rectangleArea);
    */

    // calculate area using function
    calculateAreaOfGeometricShape('rectangle-length', 'rectangle-width', 'rectangleAreaValue', 1);
}

function calculateParallelogramArea() {
    // calculate area using function
    calculateAreaOfGeometricShape('parallelogram-base', 'parallelogram-height', 'parallelogramAreaValue', 1);
}

function calculateRhombusArea() {
    // calculate area using function
    calculateAreaOfGeometricShape('rhombus-first-diagonal', 'rhombus-second-diagonal', 'rhombusAreaValue', 0.5);
}

function calculatePentagonArea() {
    // calculate area using function
    calculateAreaOfGeometricShape('pentagon-perimeter', 'pentagon-apothem', 'pentagonAreaValue', 0.5);
}

function calculateEllipseArea() {
    // calculate area using function
    calculateAreaOfGeometricShape('ellipse-major-axis', 'ellipse-minor-axis', 'ellipseAreaValue', 3.1416);
}