const formQuiz = document.querySelector(".form-quiz");
const btnSubmit = document.querySelector(".btn-submit");
const divOutput = document.querySelector(".div-output");

const correctAnswers = ["3", "180", "obtuse"];

function displayScore(score) {
    divOutput.innerText = "Score is " + score;
}

function clickHandler() {
    const formData = new FormData(formQuiz);
    let score = 0;
    let index = 0;
    for (const value of formData.values()) {
        if (correctAnswers[index] === value) {
            score += 1;
        }    
        index += 1;
    }
    displayScore(score);
}

btnSubmit.addEventListener("click", clickHandler);