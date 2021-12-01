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

// startBtn.addEventListener('click', function(){
//     gameArea.classList.remove('.hidden');
// })

modalClose.addEventListener('click', function(){
    modal.style.display = "none";
})
