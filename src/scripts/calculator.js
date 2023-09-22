export const leftOperand = document.getElementById('previous-operand');
export const rightOperand = document.getElementById('current-operand');
export const operationOperand = document.getElementById('operation');

function changeOperands(result) {
  leftOperand.innerHTML = result.leftOperand || '';
  rightOperand.innerHTML = result.rightOperand || '';
  operationOperand.innerHTML = result.operationOperand || '';
}

class Calculator {
  constructor() {
    this.commandHistory = [];
  }

  setCommand(command) {
    this.command = command;
  }

  executeCommand() {
    this.commandHistory.push(this.command);

    const result = this.command.execute();
    changeOperands(result);
  }

  executeRedo() {
    if (this.commandHistory.length === 0) return;

    const lastCommand = this.commandHistory.pop();

    const result = lastCommand.redo();

    changeOperands(result);
  }
}

export const calculator = new Calculator();
