export default class SqrtTwoCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    return this.number ** 2;
  }

  redo(result) {
    this.result = result;
    return this.result ** (1 / 2);
  }
}
