let num1 = "";
let num2 = "";
let operator = "";

const operationDisplay = document.querySelector(".operation-display");
const numberButtons = document.querySelector(".number-button-container");
const operatorButtons = document.querySelector(".operator-container");
const resetButton = document.querySelector("button#reset");

function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }
    
    function add (num1, num2) {
        console.log(num1 + num2);
    }

    function subtract (num1, num2) {
        console.log(num1 - num2);
    }

    function multiply (num1, num2) {
        console.log(num1 * num2);
    }

    function divide (num1, num2) {
        console.log(num1 / num2);
    }
}