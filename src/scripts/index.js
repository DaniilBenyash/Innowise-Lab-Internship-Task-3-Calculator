// import '../index.html';
import '../css/style.css';
import calculator from './calculator';
import AppendNumber from './operations/appendNumber';
import ChooseOperation from './operations/chooseOperation';
import HighOperation from './operations/highOperation';
import GetAnswer from './operations/getAnswer';
import AllClear from './operations/allClear';

const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const highOperationButtons = document.querySelectorAll('.high-operation');
const equealsButton = document.getElementById('equals');
const allClearButton = document.getElementById('all-clear');
const back = document.querySelector('.back');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.setCommand(new AppendNumber(button.innerHTML));
    calculator.executeCommand();
  });
});
operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.setCommand(new ChooseOperation(button.innerHTML));
    calculator.executeCommand();
  });
});
highOperationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.setCommand(new HighOperation(button.innerHTML));
    calculator.executeCommand();
  });
});
equealsButton.addEventListener('click', () => {
  calculator.setCommand(new GetAnswer());
  calculator.executeCommand();
});
allClearButton.addEventListener('click', () => {
  calculator.setCommand(new AllClear());
  calculator.executeCommand();
});
back.addEventListener('click', () => {
  calculator.executeRedo();
});
