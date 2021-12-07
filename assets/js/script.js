
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
let nameBox = document.querySelector('.name-input')
let mainArea = document.querySelector('.main-area')
let rulesArea = document.querySelector('.rules-area')
let gameArea = document.querySelector('.game-area')
let modalClose = document.querySelector('.modal-close')
let nextBtn = document.querySelector('next-btn')

startBtn.addEventListener('click', () => {
    runGame()
    gameArea.classList.remove("hide");
    mainArea.classList.add("hide")
})

rulesBtn.addEventListener('click', () => {
    rulesArea.classList.remove("hide");
    mainArea.classList.add("modal-bg")
    startBtn.classList.add("hide");
    rulesBtn.classList.add("hide");
    nameBox.classList.add("hide")
})

modalClose.addEventListener('click', () => {
    rulesArea.classList.add("hide");
    mainArea.classList.remove("modal-bg");
    startBtn.classList.remove("hide");
    rulesBtn.classList.remove("hide");
    nameBox.classList.remove("hide")
})
