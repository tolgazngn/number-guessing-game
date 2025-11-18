"use strict";

const MAX_ATTEMPTS = 5;

//main

showWelcomeMessage();

while (true) {
  playGame();

  let playAgain = confirm("Do you want to play again?");

  if (!playAgain) break;
}

//functions
function showWelcomeMessage() {
  alert(`Welcome to Number Guessing Game!\nYou have just ${MAX_ATTEMPTS} attempts.`);
}

function createRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function playGame() {
  let randomNumber = createRandomNumber();

  let won = false;
  let attemptsLeft = MAX_ATTEMPTS;

  inner:
  while (attemptsLeft > 0) {
    let guess = +prompt(`The number must between 1-100. Left ${attemptsLeft} attempts.`, "");

    if (isInvalidInput(guess)) {
      continue inner;
    };

    if (isOutOfRange(guess)) {
      alert("The number must be between 1 and 100.");
      continue inner;
    }

    attemptsLeft--;

    if (guess == randomNumber) {
      won = true;
      alert(`Congratulations! You found it in ${MAX_ATTEMPTS - attemptsLeft + 1} tries!`);
      break;
    } else if (guess < randomNumber) {
      alert(`Too low!`);
    } else {
      alert(`Too high!`);
    }
  }

  if (won == false) {
    alert(`Sorry, the number was ${randomNumber}.`);
  }
}

function isInvalidInput(value) {
  return value == null || value.trim() === "" || isNaN(value);
}

function isOutOfRange(value) {
  return value < 1 || value > 100;
}