//          GLOBAL VARIABLES DECLARATIONS
var computerScore =0, //computerScore = GENERATED EACH GAMEPLAY
  userTotalScore = 0 , //userTotalScore = THE SCORE ADDED UP BY CLICKING CRYSTALS
  gamesLost = 0 , //gamesLost = 0 + EACH GAME LOST
  gamesWon = 0 , //gamesWon = 0 + EACH GAME WON
  crystalValue = [0] ; //an array to store the value of each crytal based on the index
//          FUNCTION CREATION
function randomGen(min, max) {//Function to generate a random number, min , max parameters for either uses
    console.log("number generator");
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function crytalNumbers() {
  for ( i=0 ; i < 4; i++ ){//FUNCTION TO GENERATE A NUMBER BETWEEN 1-12 FOR EACH CRYSTAL
    crystalValue.push(randomGen(1,12));//loop to pick a number between 1-12 at random and assigns different values to each crystal.
    console.log("assigned crytal values"+crystalValue.length);
  }
}
function computerScoreChoice() {
  computerScore = randomGen(19,120);//picks a number between 19-120 for computer score
  console.log("assigned computer the score value");
  $("#computer-number").text(computerScore);
}
function gameReset() {//FUNCTION TO RESET GAME KEEPING SCORE
  computerScore = 0 ;//reset the computer score
  userTotalScore = 0 ;//sets user total score to zero
  crystalValue = [];//clears the crystal array
  crytalNumbers();//calls function to have each crystal assigned a new number between 1-12
  computerScoreChoice();//calls function to generate new random number 19-120
  $("#current-score").text(userTotalScore);
  console.log("reset game function called")
  console.log(crystalValue[0] + " " + crystalValue[1] + " " + crystalValue[2] + " " + crystalValue[3]);
  console.log(computerScore);
}
function gemClicks(crystalValueClicked) {
  userTotalScore += crystalValueClicked
  if (userTotalScore > computerScore) {
      gamesLost++;
      $("#loss").text("Losses: " + gamesLost);
      gameReset();
    }
    else if ( userTotalScore === computerScore) {
      gamesWon++;
      $("#win").text("Wins: " + gamesWon);
      gameReset();
    }
    else{
      $("#current-score").text(userTotalScore);
    }
  }
  $(document).ready(function() {
    gameReset();
    $("#crystal-blue").on("click", function() {
      gemClicks(crystalValue[0]);
      console.log(crystalValue[0]);
    });
    $("#crystal-red").on("click", function() {
      gemClicks(crystalValue[1]);
      console.log(crystalValue[1]);
    });
    $("#crystal-gold").on("click", function() {
      gemClicks(crystalValue[2]);
      $("#current-score").text(userTotalScore);
      console.log(crystalValue[2]);
    });
    $("#crystal-green").on("click", function() {
      gemClicks(crystalValue[3]);
      $("#current-score").text(userTotalScore);
      console.log(crystalValue[3]);
    });
  });