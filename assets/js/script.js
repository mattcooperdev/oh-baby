
function runGame() {

}

function setNextQuestion() {

}

function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

let startBtn = document.querySelector('.start-btn')
let rulesBtn = document.querySelector('.rules-btn')
let modal = document.querySelector('.modal-bg')
let mainArea = document.querySelector('.main-area')
let rulesArea = document.querySelector('.rules-area')
let gameArea = document.querySelector('.game-area')
let modalClose = document.querySelector('.modal-close')
let submitAnswer = document.querySelector('submit-btn')

startBtn.addEventListener('click', () => {
    runGame()
    modal.style.display = "none";
    gameArea.classList.remove("hide");
})

rulesBtn.addEventListener('click', () => {
    rulesArea.classList.remove("hide");
    mainArea.classList.add("modal-bg")
})

modalClose.addEventListener('click', () => {
    rulesArea.classList.add("hide");
    mainArea.classList.remove("modal-bg")
})
