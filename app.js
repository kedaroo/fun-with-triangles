const inputAngles = document.querySelectorAll(".input-angle");
const btnSubmit = document.querySelector(".btn-submit");
const divOutput = document.querySelector(".div-output");

function calculateSum() {
    let sum = 0;
    for (const element of inputAngles) {
        sum += Number(element.value);
    }
    if (sum === 180) {
        return true;
    } else {
        return false;
    }
}

function validateInput() {
    for (const element of inputAngles) {
        if (!element.value) {
            return false;
        }
    } 
    return true;
}

function setOutput(msg) {
    divOutput.innerText = msg;
}

function clickHandler() {
    const validInput = validateInput()
    if (validInput) {
        const isTriangle = calculateSum()
        if (isTriangle) {
            setOutput("it is a triangle");
        } else {
            setOutput("it is not a triangle");
        }
    } else {
        setOutput("please enter all 3 angles");
    }
}

btnSubmit.addEventListener("click", clickHandler);