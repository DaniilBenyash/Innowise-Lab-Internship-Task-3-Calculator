export class MS {
  constructor(number) {
    this.number = number;
  }

  execute() {
    sessionStorage.setItem('memory', this.number);
    return { leftOperand: this.number };
  }

  redo() {
    return { leftOperand: this.number };
  }
}
