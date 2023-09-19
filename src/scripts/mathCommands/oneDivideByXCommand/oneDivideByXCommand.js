export default class OneDivideByXCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    return this.number === 0 ? 0 : 1 / this.number;
  }

  redo(result) {
    this.result = result;
    return 1 / result;
  }
}
