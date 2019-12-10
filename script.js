var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container")

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("started")
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide")
    nextQuestion();
    
    


}

function nextQuestion () {

}