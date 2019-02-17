//          GLOBAL VARIABLES DECLARATIONS

var computerScore, //computerScore = GENERATED EACH GAMEPLAY
  userTotalScore = 0, //userTotalScore = THE SCORE ADDED UP BY CLICKING CRYSTALS
  gamesLost = 0, //gamesLost = 0 + EACH GAME LOST
  gamesWon = 0, //gamesWon = 0 + EACH GAME WON
  crystalValue; //a variable to store each crystals value

//          FUNCTION CREATION
//Function to generate a random number, min , max parameters for either uses
function randomGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//picks a number between 19-120 for computer score
function crytalNumbers() {
  
}
//FUNCTION TO GENERATE A NUMBER BETWEEN 1-12 FOR EACH CRYSTAL
//loop to
//pick a number between 1-12 at random and assigns different values to each crystal.

//FUNCTION TO RESET GAME KEEPING SCORE
//calls function to generate new random number 19-120
//calls function to have each crystal assigned a new number between 1-12
//sets user total score to zero

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
