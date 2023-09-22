export class SqrtYCommand {
  constructor(number, degree) {
    this.number = number;
    this.degree = degree;
  }

  execute() {
    this.result = this.number ** this.degree;
    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: Math.round(this.result ** (1 / this.degree)) };
  }
}
