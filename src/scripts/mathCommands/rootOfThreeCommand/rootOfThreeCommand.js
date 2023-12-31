export class RootOfThreeCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    this.result = this.number ** (1 / 3);
    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: Math.round(this.result ** 3) };
  }
}
