//Global Variables

let randomQuestions, currentQuestionIndex
let currentScore = 0
let answerDisabled = false
let username = ""
const nameBox = document.getElementById('nickname')
const restartBtn = document.getElementById('restart-btn')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const answerMessage = document.getElementById('message')
const startBtn = document.querySelector('.start-btn')
const rulesBtn = document.querySelector('.rules-btn')
const mainArea = document.querySelector('.main-area')
const rulesArea = document.querySelector('.rules-area')
const gameArea = document.querySelector('.game-area')
const resultsArea = document.querySelector('.results-area')
const modalClose = document.querySelector('.modal-close')

/*Start Game that hides Main Area and calls relevant functions*/

function runGame() {
    username = document.querySelector('.name-input').value
    document.querySelector('.name-input').classList.add('hide')
    gameArea.classList.remove('hide')
    mainArea.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}
/*Resets state of answer buttons and presents new random question*/

function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex])
}

/* Clears answer buttons and creates new ones depending on how many answers are required,
calls correct dataset if correct answer is selected*/

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

/*Resets answer buttons and clears answer message*/

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
    answerMessage.innerHTML = ''
}

/*Checks what answer is given and adds dataset accordingly,
gives answer message according to answer, disables answer buttons and calls next question after 3 seconds*/

function checkAnswer(event) {
    if (answerDisabled == false) { 
        answerDisabled = true
        const selectedButton = event.target
        const correct = selectedButton.dataset.correct
        setStatusClass(selectedButton, correct)
        Array.from(answerButtons.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        })
        if(correct) {
            answerMessage.innerHTML = ('Oh Yay! You got it right!')
            incrementScore()
        } else {
            answerMessage.innerHTML = ('Oh No! You got it wrong!')
            incrementWrongAnswer()
        }
        setTimeout(()=> {
            currentQuestionIndex++
            answerDisabled = false
            // setNextQuestion()
            if (currentQuestionIndex <= 9) {
                setNextQuestion()
            } else {
                endGame()
            }
        }, 1500);
    }
}

function endGame() {
    resultsArea.classList.remove('hide')
    mainArea.classList.remove('hide')
    mainArea.classList.add('modal-bg')
    gameArea.classList.add('hide')
    startBtn.classList.add('hide')
    rulesBtn.classList.add('hide')
    nameBox.classList.add('hide')
    document.getElementById('result-score').innerText = parseInt(document.getElementById('score').innerText)
    document.getElementById('username').innerText = username
}

/*Adds answer classes to answers when called*/

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

/*Clears answer classes when called*/

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

/*Adds score to correct when called*/

function incrementScore() {
    let currentScore = parseInt(document.getElementById('score').innerText)
    document.getElementById('score').innerText = ++currentScore
}

/*Adds score to incorrect when called*/

function incrementWrongAnswer() {
    let wrongScore = parseInt(document.getElementById('incorrect').innerText)
    document.getElementById('incorrect').innerText = ++wrongScore
}

// Event Listeners

startBtn.addEventListener('click', runGame) 

rulesBtn.addEventListener('click', () => {
    rulesArea.classList.remove('hide')
    mainArea.classList.add('modal-bg')
    startBtn.classList.add('hide')
    rulesBtn.classList.add('hide')
    nameBox.classList.add('hide')
})

modalClose.addEventListener('click', () => {
    rulesArea.classList.add('hide')
    mainArea.classList.remove('modal-bg')
    startBtn.classList.remove('hide')
    rulesBtn.classList.remove('hide')
    nameBox.classList.remove('hide')
})

restartBtn.addEventListener('click', () => {
    currentScore = 0
    currentQuestionIndex = 0
    resultsArea.classList.add('hide')
    rulesArea.classList.add('hide')
    mainArea.classList.remove('modal-bg')
    startBtn.classList.remove('hide')
    rulesBtn.classList.remove('hide')
    nameBox.classList.remove('hide')
})
