"use strict";

const MAX_ATTEMPTS = 5;
let randomNumber;

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
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

function playGame() {
    createRandomNumber();

    let won = false;

    inner:
    for (let attemptsLeft = MAX_ATTEMPTS; attemptsLeft > 0; attemptsLeft--) {
        let guess = +prompt(`The number must between 1-100. Left ${attemptsLeft} attempts.`, "");

        if (isInvalidInput(guess)) {
            attemptsLeft++; 
            continue inner;
        };

        if (isOutOfRange(guess)) {
            attemptsLeft++;
            alert("Number must be 1 and 100.");
            continue inner;
        }

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
    return value == null || value === "" || isNaN(value);
}

function isOutOfRange(value) {
    return value < 1 || value > 100;
}