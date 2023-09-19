export default class SqrtYCommand {
  constructor(number, degree) {
    this.number = number;
    this.degree = degree;
  }

  execute() {
    return this.number ** this.degree;
  }

  redo(result) {
    return result ** (1 / this.degree);
  }
}
