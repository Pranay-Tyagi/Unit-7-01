document.querySelector('button').addEventListener('click', function () {
  let guess = document.querySelector('input').value
  guess = parseInt(guess)
  const randomNumber = Math.floor(Math.random() * 6) + 1
  if (randomNumber === guess) {
    alert('correct')
  } else {
    alert('wrong')
  }
})
