const inputSides = document.querySelectorAll(".input-side");
const btnSubmit = document.querySelector(".btn-submit");
const divOutput = document.querySelector(".div-output");

function calculateHypotenuse() {
    let side1 = Number(inputSides[0].value);
    let side2 = Number(inputSides[1].value);
    let hypotenuse = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
    return hypotenuse;
}

function validateInput(input) {
    for (const side of input) {
        if (!side.value) {
            return false;
        }
    } 
    return true;
}

function setOutput(msg) {
    divOutput.innerText = msg;
}

function clickHandler() {
    let validInput = validateInput(inputSides);
    if (validInput) {
        let hypotenuse = calculateHypotenuse();
        setOutput(`Hypotenuse is ${hypotenuse}`);
    } else {
        setOutput("please enter all 2 sides of the triangle");
    }
}

btnSubmit.addEventListener("click", clickHandler);