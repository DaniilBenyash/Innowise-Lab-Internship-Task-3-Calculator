export class MMinus {
  constructor(number) {
    this.number = number;
  }

  execute() {
    this.memoryNumber = Number(sessionStorage.getItem('memory'));

    if (this.memoryNumber === '') {
      return this.number;
    }

    this.result = Number(this.number) - Number(this.memoryNumber);

    sessionStorage.setItem('memory', this.result);

    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: this.number };
  }
}
