export class MR {
  constructor(key) {
    this.key = key;
  }

  execute() {
    this.number = sessionStorage.getItem(this.key);
    if (this.number === '') {
      return {};
    }
    return { leftOperand: this.number };
  }

  redo() {
    return { leftOperand: this.number };
  }
}
