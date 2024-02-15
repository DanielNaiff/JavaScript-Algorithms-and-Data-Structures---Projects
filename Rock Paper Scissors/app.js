const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('User-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoices =>
  possibleChoices.addEventListener('click', e => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  console.log(randomNumber);
  switch (randomNumber) {
    case 1:
      computerChoice = 'rock';
      computerChoiceDisplay.innerHTML = computerChoice;
      break;
    case 2:
      computerChoice = 'scissors';
      computerChoiceDisplay.innerHTML = computerChoice;
      break;
    case 3:
      computerChoice = 'paper';
      computerChoiceDisplay.innerHTML = computerChoice;
      break;
  }
  getResult();
}

function getResult() {
  switch (true) {
    case computerChoice === userChoice:
      result = "It's a draw!";
      break;
    case computerChoice === 'rock' && userChoice === 'paper':
    case computerChoice === 'paper' && userChoice === 'scissors':
    case computerChoice === 'scissors' && userChoice === 'rock':
      result = 'You win!';
      break;
    default:
      result = 'You lose!';
      break;
  }

  resultDisplay.innerHTML = result;
}
