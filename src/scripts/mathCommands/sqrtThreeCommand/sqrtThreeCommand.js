export default class SqrtThreeCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    return this.number ** 3;
  }

  redo(result) {
    this.result = result;
    return this.result ** (1 / 3);
  }
}
