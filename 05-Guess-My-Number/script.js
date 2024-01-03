'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20
let highScore = 0

/*
    Functions to handle setting of various elements
*/
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number
}

const displayScore = function (score) {
  document.querySelector('.score').textContent = score
}

// Adding logic
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value)

  // When there is no guess
  if (!guess) {
    displayMessage('⛔ No number!')
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!')

    displayNumber(secretNumber)

    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.width = '30rem'

    if (score > highScore) {
      highScore = score

      document.querySelector('.highscore').textContent = highScore
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!')
      score -= 1
      displayScore(score)
    } else {
      displayMessage('💥You lost the game!')
      displayScore(0)
    }
  }
})

// Select play again button and add event listener
document.querySelector('.again').addEventListener('click', () => {
  // reset the score back to 20
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1

  displayMessage('Start guessing...')

  displayScore(score)

  document.querySelector('.guess').value = ''

  document.querySelector('body').style.backgroundColor = '#222'

  document.querySelector('.number').style.width = '15rem'
  displayNumber('?')
})
