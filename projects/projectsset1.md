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