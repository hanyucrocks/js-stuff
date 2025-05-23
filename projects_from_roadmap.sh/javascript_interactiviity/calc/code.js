const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = ``;
let operator = null;
let previousInput = ``;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        const action = button.dataset.action;

        if(!action){
            if(value === '.' && currentInput.includes('.')) return;
            currentInput += value;
            updateDisplay(currentInput);
        } else{
            switch(action){
                case 'clear':
                    clearAll();
                    break;
                case 'delete':
                    currentInput = currentInput.slice(0, -1);
                    updateDisplay(currentInput || 0);
                    break;
                    case 'add':
                    case 'subtract':
                    case 'multiply':
                    case 'divide':
                        setOperator(action);
                        break;
                    case 'equals':
                        calculate();
                        break;
            }
        }
    });
});

function updateDisplay(text){
    display.value = text;
}

function clearAll(){
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay('0');
}

function setOperator(op){
    if(currentInput === '') return;
    if(previousInput !== ''){
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate(){
    if(operator === null || currentInput === '' || previousInput === '') return;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    let result;
    switch (operator){
        case 'add':
            result = prev + curr;
            break;
        case 'subtract':
            result = prev-curr;
            break;
        case 'multiply':
            result = prev * curr;
            break;
        case 'divide':
            if(curr === 0){
                alert("Can't divide by zero, darling <3");
                clearAll();
                return;
            }
            result = prev/curr;
            break;
    }
    updateDisplay(result.toString());
    currentInput = result.toString();
    operator = null;
    previousInput = '';
}

clearAll();