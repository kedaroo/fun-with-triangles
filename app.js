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

function clickHandler() {
    const isTriangle = calculateSum()
    if (isTriangle) {
        divOutput.innerText = "it is a triangle";
    } else {
        divOutput.innerText = "it is not a triangle";
    }
}

btnSubmit.addEventListener("click", clickHandler);