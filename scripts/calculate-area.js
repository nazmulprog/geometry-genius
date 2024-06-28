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
function calculateAreaOfGeometricShape(sideOneId, sideTwoId, showElementId, areaType, constant = 1) {
    // first sides of geometric shape
    const sideOne = getInputValueById(sideOneId);

    // second sides of geometric shape
    const sideTwo = getInputValueById(sideTwoId);

    // calculate area
    const area = constant * sideOne * sideTwo;

    // validate input
    if(isNaN(area) || sideOne < 0 || sideTwo < 0){
        alert('Please Enter a Positive Number');
        return;
    }

    // set area into an element
    setTextValueById(showElementId, area.toFixed(2));
    addToCalculationEntry(areaType, area);

}


function calculateTriangleArea(event) {
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
    const areaType = event.target.parentNode.parentNode.firstElementChild.innerText;
    calculateAreaOfGeometricShape('triangle-base', 'triangle-height', 'areaValue', areaType, 0.5);
}

function calculateRectangleArea(event) {
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
    const areaType = event.target.parentNode.parentNode.firstElementChild.innerText;
    calculateAreaOfGeometricShape('rectangle-length', 'rectangle-width', 'rectangleAreaValue', areaType, 1);
}

function calculateParallelogramArea(event) {
    // calculate area using function
    const areaType = event.target.parentNode.parentNode.firstElementChild.innerText;
    calculateAreaOfGeometricShape('parallelogram-base', 'parallelogram-height', 'parallelogramAreaValue', areaType, 1);
}

function calculateRhombusArea(event) {
    // calculate area using function
    const areaType = event.target.parentNode.parentNode.firstElementChild.innerText;
    calculateAreaOfGeometricShape('rhombus-first-diagonal', 'rhombus-second-diagonal', 'rhombusAreaValue',areaType, 0.5);
}

function calculatePentagonArea(event) {
    // calculate area using function
    const areaType = event.target.parentNode.parentNode.firstElementChild.innerText;
    calculateAreaOfGeometricShape('pentagon-perimeter', 'pentagon-apothem', 'pentagonAreaValue', areaType, 0.5);
}

function calculateEllipseArea(event) {
    // calculate area using function
    const areaType = event.target.parentNode.parentNode.firstElementChild.innerText;
    calculateAreaOfGeometricShape('ellipse-major-axis', 'ellipse-minor-axis', 'ellipseAreaValue', areaType, 3.1416);
}

// add to calculation entry
function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const div = document.createElement('div');
    calculationEntry.appendChild(div);
    div.innerHTML = `<div class="grid grid-cols-3 font-semibold bg-gray-200 px-1 py-2 rounded-md mb-2 text-sm">
                        <h4>${div.childElementCount+1}.${areaType}</h4>
                        <h4  class="text-center"><span>${area}</span>cm<sup>2</sup></h4>
                        <button class="btn btn-xs btn-outline btn-primary">convert</button>
                    </div>`;
}