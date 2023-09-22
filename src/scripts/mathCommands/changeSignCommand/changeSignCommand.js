export class ChangeSignCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    this.result = -this.number;
    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: -this.result };
  }
}
