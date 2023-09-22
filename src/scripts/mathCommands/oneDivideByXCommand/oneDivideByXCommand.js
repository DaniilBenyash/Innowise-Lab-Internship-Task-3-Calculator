export class OneDivideByXCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    this.result = this.number === 0 ? 0 : 1 / this.number;
    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: 1 / this.result };
  }
}
