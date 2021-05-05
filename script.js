document.querySelector('button').addEventListener('click', function () {
  guess = document.querySelector('input').value
  guess = parseInt(guess)
  randomNumber = Math.floor(Math.random() * 6) + 1
  if (randomNumber == guess) {
    alert('correct')
  } else {
    alert('wrong')
  }
})
