
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operand1, operand2, operator) {
    return operator(operand1, operand2);
}

console.log(operate(3,2,divide));

const values = "22+100";
const operandOne = 0;
const operanTwo = 0;
for (let val of values) {
    if (val != '+') {
        operandOne
    }
    console.log(val);
}
