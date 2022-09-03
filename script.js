var albumOneScore = 0;
var albumTwoScore = 0;
var albumThreeScore = 0;

var questionCount = 0;

var restartGame = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");
console.log("restart button", restart)

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

q1a1.addEventListener("click", harryStyles1);
q1a2.addEventListener("click", fineLine);
q1a3.addEventListener("click", harrysHouse);
q2a1.addEventListener("click", harryStyles1);
q2a2.addEventListener("click", fineLine);
q2a3.addEventListener("click", harrysHouse);
q3a1.addEventListener("click", harryStyles1);
q3a2.addEventListener("click", fineLine);
q3a3.addEventListener("click", harrysHouse);
restart.addEventListener("click", newGame);
console.log("restart event listener", restart);

function harryStyles1() {
  albumOneScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "albumOneScore = " + albumOneScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function fineLine() {
  albumTwoScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "albumTwoScore = " + albumTwoScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function harrysHouse() {
  albumThreeScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "albumThreeScore = " + albumThreeScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function updateResult() {
  if (albumOneScore >= 2) {
    result.innerHTML = "You are HS1!";
    console.log("You are HS1!");
  }
  else if (albumTwoScore >= 2) {
    result.innerHTML = "You are Fine Line!";
    console.log("You are Fine Line!");
  }
  else if (albumThreeScore >= 2) {
    result.innerHTML = "You are Harry's House!";
    console.log("You are Harry's House!");
  }
  else {
    result.innerHTML = "OMG! You are a combination of all 3!";
    console.log("OMG! You are a combination of all 3!");
  }
}

// function resetGame() {
//   console.log("is this function working?")
//   result.innerHTML = "You are a...";
//   albumOneScore = 0;
//   albumTwoScore = 0;
//   albumThreeScore = 0;
//   questionCount = 0;
// }

function newGame() {
  console.log("does this work?");
  result.innerHTML = "You are a...";
  albumOneScore = 0;
  albumTwoScore = 0;
  albumThreeScore = 0;
  questionCount = 0;
}
