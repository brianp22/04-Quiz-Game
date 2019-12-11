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

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement("button")
      button.innerText = answer.text
      button.classList.add("btn")
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener("click", selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }

function selectAnswer(e) {

}

function resetPage() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

var questions = [
    {
      question: "What is 2 + 2?",
      answers: [
        { text: "4", correct: true },
        { text: "22", correct: false },
        { text: "87", correct: false},
        { text: "43", correct: true},
      ]
    },
    {
      question: "Who is the best YouTuber?",
      answers: [
        { text: "Web Dev Simplified", correct: true },
        { text: "Traversy Media", correct: true },
        { text: "Dev Ed", correct: true },
        { text: "Fun Fun Function", correct: true }
      ]
    },
    {
      question: "Is web development fun?",
      answers: [
        { text: "Kinda", correct: false },
        { text: "YES!!!", correct: true },
        { text: "Um no", correct: false },
        { text: "IDK", correct: false }
      ]
    },
    {
      question: "What is 4 * 2?",
      answers: [
        { text: "6", correct: false },
        { text: "8", correct: true }
      ]
    }
  ]

