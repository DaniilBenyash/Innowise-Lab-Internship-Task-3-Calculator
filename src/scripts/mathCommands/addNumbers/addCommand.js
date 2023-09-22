export class AddCommand {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  execute() {
    this.result = this.firstNumber + this.secondNumber;
    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: this.result - this.secondNumber };
  }
}
