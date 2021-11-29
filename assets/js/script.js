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
let rules = document.querySelector('.rules-modal')
let modalClose = document.querySelector('.modal-close')

startBtn.addEventListener('click', function(){
    rules.classlist.remove('.active');
})
modalClose.addEventListener('click', function(){
    modalClose.classList.remove('.active')
})
