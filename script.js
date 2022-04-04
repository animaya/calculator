const display = document.getElementById("display");
const operatorBtns = document.querySelectorAll(".operator");
const btns = document.querySelectorAll(".item");
const clearBtn = document.getElementById("clear");
let operand1 = "";
let operand2 = "";
let operator = ""; 
let displayBuffer = "";

function add(a, b) {
    return a + b;
}
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


operatorBtns.forEach(item => {
    item.addEventListener("click", checkOperator)
})

function checkOperator(event) {
    let key = event.target.value;
    if (key == "+") {
        operator = add;
        operand1 = displayBuffer;
        displayBuffer = ""
    } else if (key == "-"){
        operator = substract;
        operand1 = displayBuffer;
        displayBuffer = ""
    } else if (key == "*"){
        operator = multiply;
        operand1 = displayBuffer;
        displayBuffer = ""
    } else if (key == "/"){
        operator = divide;
        operand1 = displayBuffer;
        displayBuffer = ""
    } else if (key == "clear") {
        clearDisplay()
    } else if (key == "=") {
        operand2 = displayBuffer;
        display.textContent = operate(+operand1, +operand2,operator);
    }
}

btns.forEach(item => {
    item.addEventListener("click", fillDisplay)
});

function fillDisplay(event) {
   displayBuffer += event.target.value;
   display.textContent = displayBuffer;
}

function clearDisplay() {
    display.textContent = ""
    displayBuffer = ""
}


   