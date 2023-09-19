export default class SubtractCommand {
  constructor(firstNumber, secondNumber) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  execute() {
    return this.firstNumber - this.secondNumber;
  }

  redo(result) {
    return result + this.secondNumber;
  }
}
