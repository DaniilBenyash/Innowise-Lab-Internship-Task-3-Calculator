export class AppendNumber {
  constructor(operands, number) {
    this.operands = operands;
    this.number = number;
  }

  execute() {
    const changeZeroOnAnotherNumber = this.operands.rightOperand === '0' && this.number !== '0' && this.number !== '.';
    const checkValueToHasSingleZero = this.operands.rightOperand === '0' && this.number === '0';
    const checkValueToHasSingleDot = this.number === '.' && this.operands.rightOperand.includes('.');
    const checkOperandsHasOperation = this.operands.leftOperand !== '' && this.operands.operationOperand === '';

    if (changeZeroOnAnotherNumber) {
      return { rightOperand: this.number };
    }
    if (checkValueToHasSingleZero) {
      return this.operands;
    }
    if (checkValueToHasSingleDot) {
      return this.operands;
    }
    if (checkOperandsHasOperation) {
      return this.operands;
    }

    return { ...this.operands, rightOperand: this.operands.rightOperand + this.number };
  }

  redo() {
    return this.operands;
  }
}
