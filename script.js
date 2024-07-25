let display = document.getElementById('display');
let currentInput = '';
let isNewInput = false;

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function appendCharacter(char) {
    if (isNewInput) {
        currentInput = '';
        isNewInput = false;
    }
    currentInput += char;
    display.innerText = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput.replace('%', '/100')).toString();
        display.innerText = currentInput;
        isNewInput = true;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
        isNewInput = true;
    }
}
