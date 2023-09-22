export class RootOfTwoCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    this.result = this.number ** (1 / 2);
    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: Math.round(this.result ** 2) };
  }
}
