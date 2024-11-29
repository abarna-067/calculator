const display = document.getElementById('display');
let currentInput = '';
let previousAnswer = '';

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    if (value === 'clear') {
      currentInput = '';
      display.value = '';
    } else if (value === 'del') {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (value === 'ENTER') {
      try {
        currentInput = currentInput.replace('x', '*').replace('÷', '/');
        const result = eval(currentInput);
        display.value = result;
        previousAnswer = result;
        currentInput = result.toString();
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
    } else if (value === 'ans') {
      currentInput += previousAnswer;
      display.value = currentInput;
    } else if (value === '+/-') {
      if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.value = currentInput;
      }
    } else if (value === '√') {
      if (currentInput) {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        display.value = currentInput;
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
