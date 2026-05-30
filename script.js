const quizContainer = document.getElementById("quiz-container")
const questionCounter = document.getElementById("question-counter")
const progressFill = document.getElementById("progress-fill")
const questionBox = document.getElementById("question-box")
const questionText = document.getElementById("question-text")
const optionsBox = document.getElementById("options-box")
const scoreDisplay = document.getElementById("score-display")
const nextButton = document.getElementById("next-btn")
const resultsScreen = document.getElementById("results-screen")
const finalScore = document.getElementById("final-score")
const restartButton = document.getElementById("restart-btn")

const questionsList = [
    {
        question: "1 + 1",
        choices: ["Burger", "Hotdog", 2, 67],
        answer: 2
    },
    {
        question: "does rock beat paper?",
        choices: ["yes", "no", "Jose Manalo", "Naruto Uzumaki"],
        answer: 1
    },
    {
        question: "is this text a string or an int?",
        choices: ["sure", "probably", "i miss u baby", "cheesedog"],
        answer: 0
    },
    {
        question: "are mermaids real?",
        choices: ["idgaf about mermaids tf u mean", "no r u stupid", "ye", "67"],
        answer: 1
    },
    {
        question: "siomai siopao ____ ?",
        choices: ["pares", "bagnet", "xiaolongbao", "suman"],
        answer: 3
    }
]

let currentQuestion = 0
let score = 0
let answered = false

function loadQuestion() {
    answered = false
    nextButton.disabled = true
    const current = questionsList[currentQuestion] // takes vvhole objects or questions in the list
    questionText.textContent = current.question // changes the content in HTML to the current q
    questionCounter.textContent = (`Question ${currentQuestion + 1} of ${questionsList.length}`) updates the q number
}
