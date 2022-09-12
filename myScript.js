let playerScore = 0
let compScore = 0

const rockBtn = document.querySelector('#rockBtn')
const paperBtn = document.querySelector('#paperBtn')
const scissorsBtn = document.querySelector('#scissorsBtn')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')
const p = document.createElement("p")

const computerPlay = () => {
  const arrOfChoices = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random() * 3)
  const compChoice = arrOfChoices[randomNum]
  return compChoice
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    p.innerText = 'You tied!'
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    compScore++
    const p = document.createElement("p")
    p.innerText = 'You lose! Paper covers rock!'
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    compScore++
    const p = document.createElement("p")
    p.innerText = 'You lose! Scissors cut paper!'
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    compScore++
    const p = document.createElement("p")
    p.innerText = 'You lose! Rock smashes scissors!'
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    const p = document.createElement("p")
    p.innerText = 'You win! Rock smashes scissors!'
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    const p = document.createElement("p")
    p.innerText = 'You win! Paper covers rock!'
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    const p = document.createElement("p")
    p.innerText = 'You win! Scissors cut paper!'
    outcomeDiv.appendChild(p)
  }
};

const checkForWinner = (playerScore, compScore) => {
  const h2 = document.createElement("h2")
    if (playerScore === 5) {
    h2.innerText = "You won!"
  } else if (compScore === 5) {
    h2.innerText = "You lost!"
  } 
  outcomeDiv.append(h2)
}

const updateScores = (playerScore, compScore) => {
  playerScoreSpan.innerText = `Player's score: ${playerScore}`
  computerScoreSpan.innerText = ` Computer's score: ${compScore}`
}

rockBtn.addEventListener('click', () => {
  const computerSelection = computerPlay()
  const playerSelection = 'rock'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, compScore)
  checkForWinner(playerScore, compScore)
})

paperBtn.addEventListener('click', () => {
  const computerSelection = computerPlay()
  const playerSelection = 'paper'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, compScore)
  checkForWinner(playerScore, compScore)
})

scissorsBtn.addEventListener('click', () => {
  const computerSelection = computerPlay()
  const playerSelection = 'scissors'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, compScore)
  checkForWinner(playerScore, compScore)
})