export default class PercentCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    return this.number / 100;
  }

  redo(result) {
    this.result = result;
    return this.result * 100;
  }
}
