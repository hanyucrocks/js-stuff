# Projects related to DOM

## project link
[CLick here](https;)

# Solution code

## project 1

```Javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey')
    body.style.backgroundColor = e.target.id;
    if(e.target.id === 'white')
    body.style.backgroundColor = e.target.id;
    if(e.target.id === 'blue')
    body.style.backgroundColor = e.target.id;
    if(e.target.id === 'yellow')
    body.style.backgroundColor = e.target.id;
    if(e.target.id === 'purple')
    body.style.backgroundColor = e.target.id;
  })
})



```

## project 2 

``` JavaScript

// submit type event
// this usecase will gie you empty value
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `pls valid`;
  } else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `pls valid`;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    let category = '';

    if (bmi < 18.6) {
      category = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = 'Normal';
    } else {
      category = 'Overweight';
    }

    results.innerHTML = `<span>Your BMI is ${bmi} (${category})</span>`;
  }
  
});



```

## project 3 solution

``` JavaScript
const clock = document.getElementById('clock');

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

# project 4 solution code

``` Javascript

const randoNumber =parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  // validate guess kiya hai ki ni
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if (guess < 1){
    alert('Please enter a number more than 1')
  } else if(guess > 100){
    alert('Please enter a number less than 100')
  } else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`GAME OVER, Random Number was ${randoNumber}`)
      endGame()
  } else{
    displayGuess(guess)
    checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  //
  if(guess === randoNumber){
    displayMessage(`You guessed it right!`)
    endGame()
  }
  else if(guess < randoNumber){
    displayMessage(`Number is too low!`)
  }
  else if(guess  > randoNumber){
    displayMessage(`Number is too high!`)
  }
}

function displayMessage(message){
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
  //
  userInput.value = ''
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function newGame(){
  //
  const newGameButton = document.querySelector('#NewGame')
  newGameButton.addEventListener('click', function(){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1;
    guessSlot.innerHTML = ``
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame = true;
  })
}

function endGame(){
  //
  userInput.value = ``
  userInput.setAttribute(`disabled`, ``)
  p.classList.add(`button`)
  p.innerHTML = `<h2 id="NewGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false
  newGame();
}

```