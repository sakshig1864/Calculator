const display = document.getElementById("main-display");
const historyDisplay = document.getElementById("history-display");

let history = "";
let currentInput = "";

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach(button => {
    button.addEventListener("click", () => handleButtonClick(button.textContent));
});

function handleButtonClick(value) {
    switch (value) {
        case "clear":
            currentInput = "";
            history = "";
            updateDisplay();
            break;
        case "del":
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
            break;
        case "=":
            calculateResult();
            break;
        case "sin":
        case "cos":
        case "tan":
        case "log":
        case "√":
            addScientificFunction(value);
            break;
        case "÷":
            currentInput += "/";
            updateDisplay();
            break;
        case "×":
            currentInput += "*";
            updateDisplay();
            break;
        default:
            currentInput += value;
            updateDisplay();
            break;
    }
}

function updateDisplay() {
    display.value = currentInput;
    historyDisplay.textContent = history;
}

function calculateResult() {
    try {
        history = currentInput + " =";
        let result = eval(currentInput.replace("√", "Math.sqrt"));
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        display.value = "Error";
    }
}

function addScientificFunction(func) {
    switch (func) {
        case "sin":
            currentInput += "Math.sin(";
            break;
        case "cos":
            currentInput += "Math.cos(";
            break;
        case "tan":
            currentInput += "Math.tan(";
            break;
        case "log":
            currentInput += "Math.log10(";
            break;
        case "√":
            currentInput += "Math.sqrt(";
            break;
    }
    updateDisplay();
}