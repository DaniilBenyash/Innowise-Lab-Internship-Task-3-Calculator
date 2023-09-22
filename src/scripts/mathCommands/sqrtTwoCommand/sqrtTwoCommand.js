export class SqrtTwoCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    this.result = this.number ** 2;
    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: this.result ** (1 / 2) };
  }
}
