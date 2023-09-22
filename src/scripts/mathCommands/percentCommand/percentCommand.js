export class PercentCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    this.result = this.number / 100;
    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: this.result * 100 };
  }
}
