var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");



startButton.addEventListener("click", start);

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    nextQuestion();
})

function start() {
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    nextQuestion();
}

function nextQuestion() {
    reset();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", pickAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function reset() {
    removeAnswerStatus(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function pickAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    answerStatus(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        answerStatus(button, button.dataset.correct);
    })
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
}

function answerStatus(element, correct) {
    removeAnswerStatus(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function removeAnswerStatus(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

var questions = [
    {
        question: "How many infinity stones are there?",
        answers: [
            { text: "4", correct: false },
            { text: "8", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false }
        ]
    },
    {
        question: "What is the first stone artifact to appear in the MCU?",
        answers: [
            { text: "The Tesseract", correct: true },
            { text: "The Aether", correct: false },
            { text: "Loki's Staff", correct: false },
            { text: "The Orb", correct: false }
        ]
    },
    {
        question: "Which is NOT an Infinity Stone?",
        answers: [
            { text: "Soul Stone", correct: false },
            { text: "Energy Stone", correct: true },
            { text: "Power Stone", correct: false },
            { text: "Mind Stone", correct: false }
        ]
    },
    {
        question: "Vision is created when he becomes attached to which stone?",
        answers: [
            { text: "Time Stone", correct: false },
            { text: "Reality Stone", correct: false },
            { text: "Space Stone", correct: false },
            { text: "Mind Stone", correct: true }
        ]
    },
    {
        question: "Who is the keeper of the Time Stone?",
        answers: [
            { text: "Tony Stark", correct: false },
            { text: "Hawkeye", correct: false },
            { text: "Dr. Strange", correct: true },
            { text: "Thor", correct: false }
        ]
    }
]