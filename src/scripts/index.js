import '../css/style.css';
import {
  operationOperand,
  leftOperand,
  rightOperand,
  calculator,
} from './calculator';
import { AppendNumber } from './operations/appendNumber';
import { ChooseOperation } from './operations/chooseOperation';
import { HighOperation } from './operations/highOperation';
import { compute } from './compute';
import { AllClear } from './operations/allClear';
import { setTheme } from './switchTheme';

const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const highOperationButtons = document.querySelectorAll('.high-operation');
const equealsButton = document.getElementById('equals');
const allClearButton = document.getElementById('all-clear');
const back = document.querySelector('.back');
const switcherTheme = document.getElementById('calculator__button-theme');

function getOperands() {
  return {
    leftOperand: leftOperand.innerHTML,
    rightOperand: rightOperand.innerHTML,
    operationOperand: operationOperand.innerHTML,
  };
}

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const operands = getOperands();

    calculator.setCommand(new AppendNumber(operands, button.innerHTML));
    calculator.executeCommand();
  });
});
operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const operands = getOperands();

    calculator.setCommand(new ChooseOperation(operands, button.innerHTML));
    calculator.executeCommand();
  });
});
highOperationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const operands = getOperands();

    calculator.setCommand(new HighOperation(operands, button.innerHTML));
    calculator.executeCommand();
  });
});
equealsButton.addEventListener('click', () => {
  const operands = getOperands();

  if (!Object.values(operands).includes('')) compute(operands);
});
allClearButton.addEventListener('click', () => {
  const operands = getOperands();

  calculator.setCommand(new AllClear(operands));
  calculator.executeCommand();
});
back.addEventListener('click', () => {
  calculator.executeRedo();
});

switcherTheme.addEventListener('click', setTheme);
