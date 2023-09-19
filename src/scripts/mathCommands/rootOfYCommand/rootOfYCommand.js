export default class RootOfYCommand {
  constructor(number, degree) {
    this.number = number;
    this.degree = degree;
  }

  execute() {
    return this.number ** (1 / this.degree);
  }

  redo(result) {
    return result ** this.degree;
  }
}
