export class SqrtThreeCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    this.result = this.number ** 3;
    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: this.result ** (1 / 3) };
  }
}
