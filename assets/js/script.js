/**
 * variables
 */

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.choices');
const nameValue = document.getElementById('name');
const nameInput = document.getElementById('username');
const nameSubmit = document.getElementById('submit');
const gameArea = document.getElementById('game-area');
const nameArea = document.getElementById('name-area');
let currentUserScore = document.getElementById('user-score');
let currentComputerScore = document.getElementById('computer-score');
let updatedComputerScore = document.getElementById('computer-score');
let updatedUserScore = document.getElementById('user-score');
let userChoice = document.getElementById('user-choice');
let computerChoice = document.getElementById('computer-choice');

/**
 * user choices
 */

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();

}));

/**
 * generate computer choice
 */

function generateComputerChoice() {
    const randomChoice = Math.floor(Math.random() * possibleChoices.length);

    if (randomChoice === 0) {
        computerChoice = 'rock';
    }
    if (randomChoice === 1) {
        computerChoice = 'paper';
    }
    if (randomChoice === 2) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

/**
 * signin to start the game
 */

nameSubmit.addEventListener('click', (e) => {
    if (nameInput.value) {
        setName();
        toggleGame();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Hold it!',
            text: 'Please enter your winning name to play!',
        });
    }
});

function setName() {
    nameValue.innerText = nameInput.value;
}

function toggleGame() {
    nameArea.classList.add('hide');
    gameArea.classList.remove('hide');
}

/**
 * output of user- and computer-choice
 */

const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = "Well Done!";
            incrementUserScore();
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = "Too bad...";
            incrementComputerScore();
            break;
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = "Even Steven!";
            break;
    }
};

/**
 * increment user-score & check winner
 */

function incrementUserScore() {
    let updatedUserScore = parseInt(currentUserScore.innerText);
    updatedUserScore++;
    currentUserScore.innerText = updatedUserScore;
    if (updatedUserScore === 5) {
        Swal.fire('Congratulations you won 🎉');
        resetScore();
        resetChoices();
    }
}

/**
 * increment computer-score & check winner 
 */

function incrementComputerScore() {
    let updatedComputerScore = parseInt(currentComputerScore.innerText);
    updatedComputerScore++;
    currentComputerScore.innerText = updatedComputerScore;
    if (updatedComputerScore === 5) {
        Swal.fire('Sorry you lost, better luck next time 🤗');
        resetScore();
        resetChoices();
    }
}

/**
 * reset score and choices
 */

function resetScore() {
    updatedUserScore.innerText = 0;
    updatedComputerScore.innerText = 0;
    resultDisplay.innerHTML = "";
}

function resetChoices() {
    userChoiceDisplay.innerHTML = '';
    computerChoiceDisplay.innerHTML = '';
}