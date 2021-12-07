// const startButton = document.getElementById('start-btn')


// startButton.addEventListener('click', runGame) 

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
let modal = document.querySelector('.modal-bg')
let rules = document.querySelector('.rules-area')
let modalClose = document.querySelector('.modal-close')
let gameArea = document.querySelector('.game-area')
let submitAnswer = document.querySelector('submit-btn')

startBtn.addEventListener('click', () => {
    runGame()
    modal.style.display = "none";
    gameArea.classList.remove("hide");
})

modalClose.addEventListener('click', () => {
    modal.style.display = "none";
})
