export default class ChangeSignCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    return -this.number;
  }

  redo(result) {
    this.result = result;
    return -result;
  }
}
