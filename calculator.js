//Array to store calculation history
let history = [];

//Basic operation functions 
function add(a, b) {
    let result = a + b;
    storeCalculation(a, b, "+", result);
    return result;
}

function subtract(a, b) {
    let result = a - b;
    storeCalculation(a, b, "-", result);
    return result;
}

function multiply(a, b) {
    let result = a * b;
    storeCalculation(a, b, "*", result);
    return result;
}

function divide(a, b) {
    if (b === 0) {
        storeCalculation(a, b, "/", "Error: Division by zero");
        return "Error: Division by zero";
    }
    let result = a / b;
    storeCalculation(a, b, "/", result);
    return result;
}

// Function to store calculations in an array
function storeCalculation(a, b, operator, result) {
    history.push({
        operand1: a,
        operand2: b,
        operator: operator,
        result: result
    });
}

// Function to display history 
function displayHistory() {
    console.log("=== Calculation History ===");
    history.forEach((entry, index) => {
        console.log(
            `${index + 1}. ${entry.operand1} ${entry.operator} ${entry.operand2} = ${entry.result}`
        );
    });
}

// Example Usage
console.log(add(10, 5));        
console.log(subtract(20, 4));   
console.log(multiply(3, 7));    
console.log(divide(15, 3));    
console.log(divide(10, 0));     
displayHistory();
