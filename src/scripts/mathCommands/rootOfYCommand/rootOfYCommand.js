export class RootOfYCommand {
  constructor(number, degree) {
    this.number = number;
    this.degree = degree;
  }

  execute() {
    this.result = this.number ** (1 / this.degree);
    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: this.result ** this.degree };
  }
}
