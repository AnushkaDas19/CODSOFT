let displayValue = '0';
function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}
function clearLast() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}
function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}
function Display(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}
function operate(operator) {
    if (displayValue !== '0' && !displayValue.includes(operator)) {
        displayValue += operator;
        updateDisplay();
    }
}
function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}
updateDisplay();
