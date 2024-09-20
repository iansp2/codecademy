let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, secretTarget) {
  let userDistance = Math.abs(userGuess - secretTarget);
  let computerDistance = Math.abs(computerGuess - secretTarget);
  if (userDistance <= computerDistance) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}