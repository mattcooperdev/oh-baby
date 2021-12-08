let randomQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')


function runGame() {
    gameArea.classList.remove("hide")
    mainArea.classList.add("hide")
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

const startBtn = document.querySelector('.start-btn')
const rulesBtn = document.querySelector('.rules-btn')
const nameBox = document.querySelector('.name-input')
const mainArea = document.querySelector('.main-area')
const rulesArea = document.querySelector('.rules-area')
const gameArea = document.querySelector('.game-area')
const modalClose = document.querySelector('.modal-close')
const nextBtn = document.querySelector('next-btn')

startBtn.addEventListener('click', runGame) 

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
