export default class TenXCommand {
  constructor(number) {
    this.number = number;
  }

  execute() {
    return 10 ** this.number;
  }

  redo() {
    return this.number;
  }
}
