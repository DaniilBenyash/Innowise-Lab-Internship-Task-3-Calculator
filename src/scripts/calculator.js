const previousOperand = document.getElementById('previous-operand');
const currentOperand = document.getElementById('current-operand');
export const operationOperand = document.getElementById('operation');

class Calculator {
  constructor() {
    this.commandHistory = [];
  }

  setCommand(command) {
    this.command = command;
  }

  executeCommand() {
    this.commandHistory.push(this.command);

    const data = {
      currentNumber: currentOperand.innerHTML,
      previousNumber: previousOperand.innerHTML,
      operation: operationOperand.innerHTML,
    };

    const numbers = this.command.execute(data);
    if (typeof numbers === 'number') {
      previousOperand.innerHTML = numbers;
      currentOperand.innerHTML = '';
      operationOperand.innerHTML = '';
    } else if (numbers) {
      currentOperand.innerHTML = numbers.currentNumber === 0 ? 0 : numbers.currentNumber || '';
      previousOperand.innerHTML = numbers.previousNumber || '';
      operationOperand.innerHTML = numbers.operation || '';
    }
  }

  executeRedo() {
    if (this.commandHistory.length === 0) return;

    const lastCommand = this.commandHistory.pop();
    const data = {
      currentNumber: currentOperand.innerHTML,
      previousNumber: previousOperand.innerHTML,
      operation: operationOperand.innerHTML,
    };

    const numbers = lastCommand.redo(Number(data.previousNumber));

    if (typeof numbers === 'number') {
      previousOperand.innerHTML = numbers;
      currentOperand.innerHTML = '';
      operationOperand.innerHTML = '';
    } else if (numbers) {
      currentOperand.innerHTML = numbers.currentNumber === 0 ? 0 : numbers.currentNumber || '';
      previousOperand.innerHTML = numbers.previousNumber || '';
      operationOperand.innerHTML = numbers.operation || '';
    }
  }
}

const calculator = new Calculator();
export default calculator;
