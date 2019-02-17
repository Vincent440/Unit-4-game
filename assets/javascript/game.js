//          GLOBAL VARIABLES DECLARATIONS

var computerScore = 0 , //computerScore = GENERATED EACH GAMEPLAY
  userTotalScore = 0 , //userTotalScore = THE SCORE ADDED UP BY CLICKING CRYSTALS
  gamesLost = 0 , //gamesLost = 0 + EACH GAME LOST
  gamesWon = 0 , //gamesWon = 0 + EACH GAME WON
  crystalValue = [] ; //an array to store the value of each crytal based on the index

//          FUNCTION CREATION
//Function to generate a random number, min , max parameters for either uses
function randomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//picks a number between 19-120 for computer score
function crytalNumbers() {
  for ( i=0 ; i < 4; i++ ){//FUNCTION TO GENERATE A NUMBER BETWEEN 1-12 FOR EACH CRYSTAL
    crystalValue.push(randomGen(1,12));//loop to pick a number between 1-12 at random and assigns different values to each crystal.
    console.log("assigned crytal value"+crystalValue.length);
  }
}
function computerScoreChoice() {
  computerScore = randomGen(19,120);
  console.log("assigned computer value");
  $("#computer-number").text(computerScore);
}

function gameReset() {//FUNCTION TO RESET GAME KEEPING SCORE
  computerScore = 0 ;//reset the computer score
  userTotalScore = 0 ;//sets user total score to zero
  crystalValue = [];//clears the crystal array
  crytalNumbers();//calls function to have each crystal assigned a new number between 1-12
  computerScoreChoice();//calls function to generate new random number 19-120
  console.log("reset game")

  console.log(computerScore + " as well as" + crystalValue[0] + crystalValue[1] + crystalValue[2] +crystalValue[3]);
}


  $(document).ready(function() {

    gameReset();




    $("#crystal-blue").on("click", function() {
      userTotalScore += crystalValue[0]  ;
      $("#current-score").text(userTotalScore);
      console.log(crystalValue[0]);
    });

    $("#crystal-red").on("click", function() {
      userTotalScore += crystalValue[1]  ;
      $("#current-score").text(userTotalScore);
      console.log(crystalValue[1]);
    });

    $("#crystal-gold").on("click", function() {
      userTotalScore += crystalValue[2]  ;
      $("#current-score").text(userTotalScore);
      console.log(crystalValue[2]);
    });

    $("#crystal-green").on("click", function() {
      userTotalScore += crystalValue[3]  ;
      $("#current-score").text(userTotalScore);
      console.log(crystalValue[3]);
    });

function gemClicks() {

  if (userTotalScore > computerScore){
      gamesLost++;
      $("#loss").text("Losses: " + gamesLost);
      gameReset();
    }
    else if ( userTotalScore === computerScore) {
      gamesWon++;
      $("#win").text("Wins: " + gamesWon);
      gameReset();
      }
  }



  
  });
//INSIDE DOCUMENT.READY FUNCTION BUILD GAME
//on click even for each of the four gem images
//when any of the four crytals is clicked
//             if
// the user score number is less then the computer generated number allow user to
//add the 1-12 random number from the crystal clicked += userTotalScore
//attached to DOM push to show on screen
//             else if
//if the userscore is above computer score
// losses ++ (attached to dom to show on screen)
//call reset game function
//              else
//wins++(attached to dom push to show on screen)
//call function to reset game
