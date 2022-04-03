const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.choices')
let userChoice
let randomChoice
let computerChoice
let result
let currentUserScore = document.getElementById('user-score')
let currentComputerScore = document.getElementById('computer-score')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    incrementUserScore()
    incrementComputerScore()
}))

function generateComputerChoice() {
    const randomChoice = Math.floor(Math.random()*possibleChoices.length)

    if (randomChoice === 0) {
        computerChoice = 'rock'
    }
    if (randomChoice === 1) {
        computerChoice = 'paper'
    }
    if (randomChoice === 2) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.innerHTML = "Well Done!"
            incrementUserScore()
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = "Too bad..."
            incrementComputerScore()
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = "Even Steven!"
            break
    }
}

function incrementUserScore() {
    let currentUserScore = parseInt(userScore.innerText);
    currentUserScore++;
    console.log(currentUserScore);
    userScore.innerText = currentUserScore;
  }

function incrementComputerScore() {
    let currentComputerScore = parseInt(computerScore.innerText);
    currentComputerScore++;
    console.log(currentComputerScore);
    computerScore.innerText = currentComputerScore;
}