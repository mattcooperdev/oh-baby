const startButton = document.getElementById('start-btn')


startButton.addEventListener('click', runGame) 

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
let modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')

startBtn.addEventListener('click', function(){
    modalBg.classlist.add('.game-area-active');
})
modalClose.addEventListener('click', function(){
    modalClose.classList.remove('.game-area-active')
})
