let playerScore = 0
let compScore = 0

const computerPlay = () => {
  const arrOfChoices = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random() * 3)
  const compChoice = arrOfChoices[randomNum]
  return compChoice
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 'You tied!'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    compScore++
    return 'You lose! Paper covers rock!'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    compScore++
    return 'You lose! Scissors cut paper!'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    compScore++
    return 'You lose! Rock smashes scissors!'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    return 'You win! Rock smashes scissors!'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    return 'You win! Paper covers rock!'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    return 'You win! Scissors cut paper!'
  }
}

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose what you throw', 'Rock, Paper, Scissors').toLowerCase()
    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
  }

  if (playerScore > compScore) {
    return 'You win! You beat the computer!'
  } else if (playerScore < compScore) {
    return 'You lose! The computer beat you!'
  } else {
    return 'You tied with the computer!'
  }
}

console.log(game())