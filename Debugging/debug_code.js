function performOperation() {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);


if (!isNaN(num1) && !isNaN(num2)) {
    let result1 = multiply(num1, num2);
    let result2 = divide(num1, num2);
    let result3 = subtract(num1, num2);

    displayResult(result1, result2, result3);
} else {
    displayResult('Please enter valid numbers');
}
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    return a * b;
}

function divide(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    return a / b;
}

function subtract(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    return a - b;
}

function displayResult(result1, result2, result3) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result1}, ${result2}, ${result3}`;
}