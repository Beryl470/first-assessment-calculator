let history = [];

// Append numbers/operators to display
function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;

    if (!expression) return;

    try {
        // Evaluate the expression
        let result = eval(expression);
        display.value = result;

        // Add to history
        addToHistory(`${expression} = ${result}`);
    } catch (e) {
        display.value = 'Error';
    }
}

// Update history display
function addToHistory(entry) {
    history.push(entry);
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

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

//clears history
function clearHistory() {
    history = [];
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = 'No history has been made';
    historyList.appendChild(li);
}
