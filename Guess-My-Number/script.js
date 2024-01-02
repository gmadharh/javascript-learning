'use strict'

const secretNumber = Math.trunc(Math.random() * 20) + 1

document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value)

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!'
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!'
  }
})