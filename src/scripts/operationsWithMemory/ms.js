export class MS {
  constructor(number, key) {
    this.number = number;
    this.key = key;
  }

  execute() {
    sessionStorage.setItem(this.key, this.number);
    return { leftOperand: this.number };
  }

  redo() {
    return { leftOperand: this.number };
  }
}
