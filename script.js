var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container")
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("started")
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    questionContainer.classList.remove("hide")
    nextQuestion();
}

function nextQuestion () {
    showQuestion(questions[currentQuestionIndex])

}

function showQuestion(questions) {
    questionElement.innerHTML = questions.title;

}

