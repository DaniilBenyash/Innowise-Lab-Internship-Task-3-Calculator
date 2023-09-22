export class TenXCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    this.result = 10 ** this.number;
    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: Math.log(this.result) / Math.log(10) };
  }
}
