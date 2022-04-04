const display = document.getElementById("display");
const operatorBtns = document.querySelectorAll(".operator");
const btns = document.querySelectorAll(".item");
const clearBtn = document.getElementById("clear");
let operand1 = "";
let operand2 = "";
let operator = ""; 
let displayBuffer = "";
let result = 0;

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
        if (+operand1 > 0) {
            operand2 = displayBuffer;
            result = operate(+operand1, +operand2,operator);
            display.textContent = result.toFixed(3);
            displayBuffer = "";
        } else if (result > 0) {
            operand2 = displayBuffer;
            result = operate(result, +operand2,operator);
            display.textContent = result.toFixed(3);
            displayBuffer = "";
        }
        operand1 = displayBuffer;
        operator = add;
        displayBuffer = "";
        
    } else if (key == "-"){
        if (+operand1 > 0) {
            operand2 = displayBuffer;
            result = operate(+operand1, +operand2,operator);
            display.textContent = result.toFixed(3);
            displayBuffer = "";
        } else if (result > 0) {
            operand2 = displayBuffer;
            result = operate(result, +operand2,operator);
            display.textContent = result.toFixed(3);
            displayBuffer = "";
        }
        operator = substract;
        operand1 = displayBuffer;
        displayBuffer = ""
    } else if (key == "*"){
        if (+operand1 > 0) {
            operand2 = displayBuffer;
            result = operate(+operand1, +operand2,operator);
            display.textContent = result.toFixed(3);
            displayBuffer = "";
        } else if (result > 0) {
            operand2 = displayBuffer;
            result = operate(result, +operand2,operator);
            display.textContent = result.toFixed(3);
            displayBuffer = "";
        }
        operator = multiply;
        operand1 = displayBuffer;
        displayBuffer = ""
    } else if (key == "/"){
        if (+operand1 > 0) {
            operand2 = displayBuffer;
            result = operate(+operand1, +operand2,operator);
            display.textContent = result.toFixed(3);
            displayBuffer = "";
        } else if (result > 0) {
            operand2 = displayBuffer;
            result = operate(result, +operand2,operator);
            display.textContent = result.toFixed(3);
            displayBuffer = "";
        }
        operator = divide;
        operand1 = displayBuffer;
        displayBuffer = ""
    } else if (key == "clear") {
        clearDisplay()
    } else if (key == "=") {
        if (result > 0) {
            operand2 = displayBuffer;
            result = operate(result, +operand2,operator);
            console.log(result);
            display.textContent = result.toFixed(3);
            console.log("reached?");
            displayBuffer = "";
        } else {
        operand2 = displayBuffer;
        result = operate(+operand1, +operand2,operator);
        display.textContent = result.toFixed(3);
        }
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
    result = "";
    operand2 = "";
    operator = "";
}


   