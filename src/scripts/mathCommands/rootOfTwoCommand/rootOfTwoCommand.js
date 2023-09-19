export default class RootOfTwoCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    return this.number ** (1 / 2);
  }

  redo(result) {
    this.result = result;
    return this.result ** 2;
  }
}
