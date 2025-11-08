


let playAgain = 'yes'


while (playAgain.toLowerCase() === 'yes') {

  const MAX_NUMBER = 100;
  let secretNumber = (Math.floor(Math.random() * MAX_NUMBER) + 1)
  let guessedNumber
  let triesLeft = 10
  let numbersTried = []

  alert('Welcome to the number guessing game 🎉 Write a number between 1 and 100 and follow the instructions after. Good luck 🍀')

  while (triesLeft > 0 && guessedNumber !== secretNumber) {
    guessedNumber = prompt('Write a number!')

    if (guessedNumber === null) {
      alert('Game cancelled');
      playAgain = 'no'
      break;
    }

    guessedNumber = parseInt(guessedNumber)

    if (isNaN(guessedNumber) || guessedNumber > MAX_NUMBER || guessedNumber <= 0) {
      alert('Please enter a valid number!')
      continue;
    }

    if (numbersTried.includes(guessedNumber)) {
      alert(`You have already tried this number. Guess another one!`)
      continue;
    }

    numbersTried.push(guessedNumber)

    if (guessedNumber === secretNumber) {
      alert(`Yay! 🥳 You won! 🏆 The number was ${secretNumber} and you guessed it after ${numbersTried.length} tries.`)
      playAgain = prompt('Would you like to play again? Answer "yes" or "no".')
      if (playAgain === null) {
        break;
      }
      break;
    }

    if (guessedNumber > secretNumber) {
      triesLeft--
      alert(`Too high! Try again! You have ${triesLeft} tries left. And the number you have tried: ${numbersTried}.`)
    } else {
      triesLeft--
      alert(`Too low! Try again! You have ${triesLeft} tries left. And the numbers you have tried: ${numbersTried}.`)
    }

    if (triesLeft === 0 && guessedNumber !== secretNumber) {
      alert(`Tough luck! 🥸 You used all your chances. The number was ${secretNumber} and the numbers you guessed: ${numbersTried}.`)
      playAgain = prompt('Would you like to try again? Answer "yes" or "no".')
      if (playAgain === null) {
        break;
      }
      break;
    }
  }
}


