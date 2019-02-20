//Link to live game in portfolio page on! https://vincent440.github.io/

//          GLOBAL VARIABLES DECLARATIONS
var computerScore = 0, //computerScore = the score the user must meet
  userTotalScore = 0, //userTotalScore = the variable to store the users score during Gameplay.
  gamesLost = 0, //gamesLost = 0 + EACH GAME LOST during game session
  gamesWon = 0, //gamesWon = 0 + EACH GAME WON during game session
  crystalValue = [0]; //an array to store the value of each crytal based on the index
//          FUNCTION CREATION
function randomGen(min, max) {
  //Function to generate a random number, min , max parameters for either uses in this program
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function crytalNumbers() {
  for (i = 0; i < 4; i++) {
    //FUNCTION TO GENERATE A NUMBER BETWEEN 1-12 FOR EACH CRYSTAL
    crystalValue.push(randomGen(1, 12)); //loop through and assign a different value to each crystal.
  }
}
function computerScoreChoice() {
  computerScore = randomGen(19, 120); //picks a number between 19-120 for computer score
  //console.log("assigned computer the score value");
  $("#computer-number").text(computerScore);//dom push the value
}
function gameReset() {
  //FUNCTION TO RESET GAME KEEPING SCORE
  computerScore = 0; //reset the computer score
  userTotalScore = 0; //sets user score to zero
  crystalValue = []; //dumps the crystal array
  crytalNumbers(); //call to have each crystal assigned a new number between 1-12
  computerScoreChoice(); //call to generate new random number 19-120
  $("#current-score").text(userTotalScore);//sets user score to zero on document
  //console.log("reset game function called");
}
function gemClicks(crystalValueClicked) {//function to take in crystal value on each click
  userTotalScore += crystalValueClicked;//adds the value of the crystal clicked based on the index passed through function parameters
  //console.log("entered if statement")
  if (userTotalScore > computerScore) {//first checks if the value took you over the target score
    gamesLost++;//increments losses value
    $("#loss").text("Losses: " + gamesLost);//pushes new lose to html
    $("#userUpdates").text("Loser!")
    gameReset();//reset game to start again

  } else if (userTotalScore === computerScore) {//checks if user won from the value added
    gamesWon++;//increments wins
    $("#win").text("Wins: " + gamesWon);//pushes new win to html
    $("#userUpdates").text("Winner!")
    gameReset();//resets game to start again
  } else {//takes the value and pushes it to html to display total score after each click
    $("#current-score").text(userTotalScore);
  }
}
$(document).ready(function() {
  //calls reset function on page load to assign values to each crystal as well as the target score to reach. 
  gameReset();
  //Click events for each of my four crystals to pass thier value through a function to determine game outcome. 
  $("#crystal-blue").on("click", function() {
    gemClicks(crystalValue[0]);
  });
  $("#crystal-red").on("click", function() {
    gemClicks(crystalValue[1]);
  });
  $("#crystal-gold").on("click", function() {
    gemClicks(crystalValue[2]);
    $("#current-score").text(userTotalScore);
  });
  $("#crystal-green").on("click", function() {
    gemClicks(crystalValue[3]);
    $("#current-score").text(userTotalScore);
  });
});
