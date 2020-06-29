// Link to live game in portfolio page on! https://vincent440.github.io/
// ----------------------GLOBAL VARIABLES DECLARATIONS-------------------------------------------------
let computerScore = 0 // computerScore = the score the user must meet
let userTotalScore = 0 // userTotalScore = the variable to store the users score during Gameplay.
let gamesLost = 0 // gamesLost = 0 + EACH GAME LOST during game session
let gamesWon = 0 // gamesWon = 0 + EACH GAME WON during game session
let crystalValue = [] // an array to store the value of each crytal based on the index
// --------------------------FUNCTION CREATION--------------------------------------------------------
function randomGen (min, max) {
  // Generate a random number with min, max
  return Math.floor(Math.random() * (max - min + 1)) + min // parameters for either uses in this program
}
function crytalNumbers () {
  for (let i = 0; i < 4; i++) {
    // FUNCTION TO GENERATE A NUMBER BETWEEN 1-12 FOR EACH CRYSTAL
    crystalValue.push(randomGen(1, 12)) // loop to assign a different value to each crystal.
  }
}
function computerScoreChoice () {
  computerScore = randomGen(19, 120) // picks a number between 19-120 for computer score
  $('#computer-number').text(computerScore) // DOM push the value
}
function gameReset () {
  // FUNCTION TO RESET GAME KEEPING SCORE
  computerScore = 0 // reset the computer score
  userTotalScore = 0 // sets user score to zero
  crystalValue = [] // dumps the crystal array
  crytalNumbers() // call to have each crystal assigned a new number between 1-12
  computerScoreChoice() // call to generate new random number 19-120
  $('#current-score').text(userTotalScore) // sets user score to zero on document
}
function gemClicks (crystalValueClicked) {
  // function to take in crystal value on each click
  userTotalScore += crystalValueClicked // adds the value of the crystal clicked based from index(From function parameter)
  if (userTotalScore > computerScore) {
    // first checks if the value took you over the target score
    gamesLost++ // increments losses value
    $('#loss').text('Losses: ' + gamesLost) // pushes new lose to html
    $('#userUpdates').text('Loser!')
    gameReset() // reset game to start again
  } else if (userTotalScore === computerScore) {
    // checks if user won from the value added
    gamesWon++ // increments wins
    $('#win').text('Wins: ' + gamesWon) // pushes new win to html
    $('#userUpdates').text('Winner!')
    gameReset() // resets game to start again
  } else {
    // takes the value and pushes it to html to display total score after each click
    $('#current-score').text(userTotalScore)
  }
}
$(document).ready(function () {
  gameReset() // call reset function to assign values to each crystal & Set Target Score
  $('.crystals').on('click', function () {
    // Click events for my four crystals
    var crystalIndex = $(this).attr('data-index') // Pulls the index of the crystal
    gemClicks(crystalValue[crystalIndex])
  }) // Passes thier value through a function to determine game outcome.
})
