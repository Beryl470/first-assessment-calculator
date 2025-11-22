const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const historyList = document.getElementById('history-list');

let currentInput = '';  // current number input as string
let calculation = '';   // full expression as string
let history = [];       // history array

// Arithmetic functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? "Error" : a / b; }

// Perform calculation safely
function calculateExpression(expr) {
    const numbers = expr.split(/[\+\-\*\/]/).map(Number);
    const operators = expr.match(/[\+\-\*\/]/g);

    if (!operators) return numbers[0];

    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        const num = numbers[i + 1];
        switch (operators[i]) {
            case '+': result = add(result, num); break;
            case '-': result = subtract(result, num); break;
            case '*': result = multiply(result, num); break;
            case '/': result = divide(result, num); break;
        }
    }
    return result;
}

// Update history display
function updateHistory() {
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (!value) return;

        if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput === '' && calculation === '') return;
            calculation += currentInput + value;
            currentInput = '';
        } else {
            currentInput += value;
        }

        display.value = calculation + currentInput;
    });
});

// Handle equals
equals.addEventListener('click', () => {
    if (currentInput === '' && calculation === '') return;

    calculation += currentInput;  // complete the expression
    const result = calculateExpression(calculation);

    // Save to history
    const record = `${calculation} = ${result}`;
    history.push(record);
    updateHistory();

    // Display result and reset for next input
    display.value = result;
    currentInput = result.toString();
    calculation = '';
});

// Handle clear
clear.addEventListener('click', () => {
    currentInput = '';
    calculation = '';
    display.value = '';
});
