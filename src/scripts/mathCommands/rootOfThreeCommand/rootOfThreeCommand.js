export default class RootOfThreeCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    return this.number ** (1 / 3);
  }

  redo(result) {
    this.result = result;
    return this.result ** 3;
  }
}
