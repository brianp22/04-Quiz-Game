var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainer = document.getElementById("question-container")
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var choices = questions.choices

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("started")
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    questionContainer.classList.remove("hide")
    nextQuestion();
}

function nextQuestion () {
    resetPage()
    showQuestion(questions[currentQuestionIndex]);

}

function showQuestion(questions) {
    questionElement.innerHTML = questions.title;
    for (var i = 0; i < questions.choices.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = questions.choices[i];
        button.classList.add("btn")
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    }

}

function selectAnswer(e) {

}

function resetPage() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

