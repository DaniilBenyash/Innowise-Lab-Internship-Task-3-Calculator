export default class DivideCommand {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  execute() {
    return this.secondNumber === 0 ? 0 : this.firstNumber / this.secondNumber;
  }

  redo(result) {
    return result * this.secondNumber;
  }
}
