let currentInput = "";
let resultDisplay = document.getElementById("display");

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(event) {
  const key = event.key;

  if (key === 'Enter') {
        calculateResult();
  } 
  else if (key === 'Backspace') {
        deleteLastDigit();
  } 
  else if (key === 'Escape') {
    
    clearAll();
  } 
   else if (/[\d.]/.test(key)) {
    appendNumber(key);
  } 
   else if (['%', '+', '-', '*', '/'].includes(key)) {
   
    appendOperator(key);
  }
}


function appendNumber(input) {
  

  currentInput += input;
  updateDisplay();
}

function appendOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function deleteLastDigit() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function clearAll() {
  currentInput = "";
  updateDisplay();
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  resultDisplay.value = currentInput;
}
