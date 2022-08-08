// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
var startButton = document.querySelector("#begin");
var quizTimer = document.querySelector("#counter");
var quesionPrompt = document.querySelector(".question-container");
var question = document.querySelector("#questions");
var answerChoices = document.querySelectorAll(".btn");

var firstQuestionAsked = {
    asked: "question will be here",
    choices: ["choice 1","2","3","4"],
    answer: 0
    //answer is # in array
}

// timer begins when clicking the button to start quiz
startButton.addEventListener("click",quizCountdown);

function quizCountdown () {
    var countStart = 80;

    quizTimer.innerHTML = countStart;

    var quizStart = setInterval(function(){
        countStart --;
        quizTimer.innerHTML = countStart;
       }
    ,1000);

      // if timer hits 0 quiz over
    //if wrong answer - 10 seconds

    startButton.classList.add("hide");
    quesionPrompt.classList.remove("hide");
    quizQuestion();
} 


// ask each question and present the answers
function quizQuestion (){
    question.innerHTML = firstQuestionAsked.asked;


}

function quizPoints () {

}

//make a quiz
//click button, start timer and show first question
// choose an answer and if wrong - 10 seconds. if right +20 points
// go to next question after chooses answer option
// calculates score on how many right and gives total
//allows you to save name and score (localstorage)