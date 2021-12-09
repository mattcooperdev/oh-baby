let randomQuestions, currentQuestionIndex
const restartBtn = document.getElementsByClassName('restart-btn')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const answerMessage = document.getElementById('message')


function runGame() {
    gameArea.classList.remove('hide')
    mainArea.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('answer-btn')
        button.innerText = answer.text
        button.classList.add('answer-btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', checkAnswer)
        answerButtons.appendChild(button)
    })
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
    answerMessage.innerHTML = ''
}

function checkAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(selectedButton, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(correct) {
        answerMessage.innerHTML = ('Yay! You got it right!')
        incrementScore()
    } else {
        answerMessage.innerHTML = ('Oh No! You got it wrong!')
        incrementWrongAnswer()
    }
    setTimeout(()=> {
        currentQuestionIndex++
        setNextQuestion()
    }, 3000);
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText)
    document.getElementById('score').innerText = ++oldScore
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText)
    document.getElementById('incorrect').innerText = ++oldScore
}

const startBtn = document.querySelector('.start-btn')
const rulesBtn = document.querySelector('.rules-btn')
const nameBox = document.querySelector('.name-input')
const mainArea = document.querySelector('.main-area')
const rulesArea = document.querySelector('.rules-area')
const gameArea = document.querySelector('.game-area')
const modalClose = document.querySelector('.modal-close')

startBtn.addEventListener('click', runGame) 

rulesBtn.addEventListener('click', () => {
    rulesArea.classList.remove('hide');
    mainArea.classList.add('modal-bg')
    startBtn.classList.add('hide');
    rulesBtn.classList.add('hide');
    nameBox.classList.add('hide')
})

modalClose.addEventListener('click', () => {
    rulesArea.classList.add('hide');
    mainArea.classList.remove('modal-bg');
    startBtn.classList.remove('hide');
    rulesBtn.classList.remove('hide');
    nameBox.classList.remove('hide')
})
