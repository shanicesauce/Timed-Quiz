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
var header = document.querySelector("#head");
var startButton = document.querySelector("#begin");
var quizTimer = document.querySelector("#counter");
var highScore = document.querySelector("#highscore");
var quesionPrompt = document.querySelector(".question-container");
var question = document.querySelector("#questions");
var answerChoices = document.querySelectorAll(".btn");
var gameDone = document.querySelector("#end");
var endScore =document.querySelector("#gameover");
var choiceOne  = document.querySelector ('#choiceOne');
var choiceTwo = document.querySelector ('#choiceTwo');
var choiceThree = document.querySelector ('#choiceThree');
var choiceFour = document.querySelector ('#choiceFour');
var choiceOptions = [choiceOne,choiceTwo,choiceThree,choiceFour];

// timer begins when clicking the button to start quiz
startButton.addEventListener("click",quizCountdown);


var gameScore = 0;
var countStart = 80;
function quizCountdown () {
   

    quizTimer.textContent =  countStart;

    var quizStart = setInterval(function(){
        countStart --;
        quizTimer.textContent = countStart;
    
        if (countStart == 0) {
        countStart.textContent = '';
        clearInterval(quizStart);
        }
        
        
},1000);

    
quizQuestion();
      // if timer hits 0 quiz over
    //if wrong answer - 10 seconds
    highScore.classList.add("hide");
    startButton.classList.add("hide");
    header.classList.add("hide");
    quesionPrompt.classList.remove("hide");
 
} 


var firstQuestionAsked = {
    asked: "There are two clocks of different colors: The green clock is broken and doesn't run at all, but the yellow clock loses one second every 24 hours. Which clock is more accurate? ",
    choices: ["The green clock", "The yellow clock", "Neither", "Both"],
    answer: "The green clock"
};
// ask each question and present the answers
function quizQuestion (){
 console.log (firstQuestionAsked.asked);
 question.textContent = firstQuestionAsked.asked


 for (var i = 0; i < choiceOptions.length; i++) {
    choiceOptions[i].textContent = firstQuestionAsked.choices[i]
    choiceOptions[i].setAttribute("onclick","selectedAnswer(this)")
 }
}

function selectedAnswer(answer){
    var choiceAns = answer.textContent;
    var correctAnswer = firstQuestionAsked.answer;
    if (choiceAns === correctAnswer){
      alert ("correct!")
      gameScore= + 10;
      console.log(gameScore);
      
    }
    else {
        alert ("wrong!")
        countStart = countStart -10;
        
    }
secondQuestion() 
   
}

    var secondQuestionAsked = {
    asked: "You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?",
    choices: ["1st", "2nd","3rd", "None of the above"],
    answer: "3rd"
};

function secondQuestion() {
    console.log (secondQuestionAsked.asked);
    question.textContent = secondQuestionAsked.asked


    for (var i = 0; i < choiceOptions.length; i++) {
        choiceOptions[i].textContent = secondQuestionAsked.choices[i]
        choiceOptions[i].setAttribute("onclick","selectAnswer(this)")
     }
    }
    
    function selectAnswer(answer){
        var choiceAns = answer.textContent;
        var correctAnswer = secondQuestionAsked.answer;
        console.log (correctAnswer);
        if (choiceAns === correctAnswer){
          alert ("correct!");
          gameScore = gameScore + 10;
          console.log(gameScore);
        }
        else {
            alert ("wrong!");
            countStart = countStart -10;
            
        }
     thirdQuestion()
    };

var thirdQuestionAsked = {
     asked: "How many months have 28 days?",
    choices: ["2","1","All of them","Depends if there's a leap year or not"],
    answer: "All of them"
};


function thirdQuestion() {
    console.log (thirdQuestionAsked.asked);
    question.textContent = thirdQuestionAsked.asked
        
   
    for (var i = 0; i < choiceOptions.length; i++) {
        choiceOptions[i].textContent = thirdQuestionAsked.choices[i]
        choiceOptions[i].setAttribute("onclick","selectAnsr(this)")
     }
    }
    
    function selectAnsr(answer){
        var choiceAns = answer.textContent;
        var correctAnswer = thirdQuestionAsked.answer;
        if (choiceAns === correctAnswer){
          alert ("correct!");
          gameScore = gameScore + 10;
          console.log(gameScore);
        }
        else {
            alert ("wrong!");
            countStart = countStart -10;
            
        }
    gameOver();
 };

function quizPoints () {


  var scores = document.createElement("input");
  var scoreEnter = document.createElement("button");

        scores.className="score"

        endScore.appendChild (scores);
        endScore.appendChild(scoreEnter);

    scoreEnter.textContent = "submit";
    scoreEnter.addEventListener ("click",function(){
        var personsName = scores.value;
        console.log (personsName);
    
     var highScores = [] 
     highScores.push ([personsName , gameScore]);
     console.log (highScores);
    
     localStorage.setItem ("highScores",JSON.stringify(highScores));

     var finalScore = localStorage.getItem("highScores");
     console.log (finalScore);
    //  if (!finalScore) {
    //      return false; } 
    displayScores(finalScore);
})
}

function displayScores (finalScore) {

    for (var i = 0; i < finalScore.length; i++) {

        totalsListed = finalScore[i];

        var scoresList = document.createElement ("ul");
        var totals = document.createElement ("li");

        endScore.appendChild(scoresList);

        scoresList.appendChild(totals)


    }
    totals = totalsListed
    //create ul , create li
    //set list items name and score 
    //take one name and score out [i] 
    //will need a for loop smh
    //length of final score create
    //do loop first smh
    //do all above inside for loop 
    //append items
    // have finalscore textcontent
}

function showHighscore (){
    highScore.addEventListener ("click",displayScores)
}

function gameOver (){
    
    gameDone.textContent = "Game Over!";
    quesionPrompt.classList.add("hide");

    countStart=clearInterval(countStart);

    quizPoints ()
   //when clock hit 0 or answered all questions
   //total score of correct answers and display, allow to save name and score  
}


//make a quiz
//click button, start timer and show first question
// choose an answer and if wrong - 10 seconds. if right +20 points
// go to next question after chooses answer option
// calculates score on how many right and gives total
//allows you to save name and score (localstorage)