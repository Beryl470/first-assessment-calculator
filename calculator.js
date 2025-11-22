// Array to store calculation history
let history = [];

// Get input values
function getInputValues() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return null;
    }
    return { num1, num2 };
}

// Update history display
function updateHistory(expression = null) {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    if (expression) {
        history.push(expression);
    }

    if (history.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No history has been made';
        historyList.appendChild(li);
    } else {
        history.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            historyList.appendChild(li);
        });
    }
}

// Clear history
function clearHistory() {
    history = [];
    updateHistory();
}

// Arithmetic operations
function add() {
    const values = getInputValues();
    if (!values) return;
    const result = values.num1 + values.num2;
    updateHistory(`${values.num1} + ${values.num2} = ${result}`);
}

function subtract() {
    const values = getInputValues();
    if (!values) return;
    const result = values.num1 - values.num2;
    updateHistory(`${values.num1} - ${values.num2} = ${result}`);
}

function multiply() {
    const values = getInputValues();
    if (!values) return;
    const result = values.num1 * values.num2;
    updateHistory(`${values.num1} × ${values.num2} = ${result}`);
}

function divide() {
    const values = getInputValues();
    if (!values) return;
    if (values.num2 === 0) {
        alert("Cannot divide by zero!");
        return;
    }
    const result = values.num1 / values.num2;
    updateHistory(`${values.num1} ÷ ${values.num2} = ${result}`);
}

// Initialize empty history
updateHistory();
