export class MMinus {
  constructor(number, key) {
    this.number = number;
    this.key = key;
  }

  execute() {
    this.memoryNumber = Number(sessionStorage.getItem(this.key));

    if (this.memoryNumber === '') {
      return this.number;
    }

    this.result = Number(this.number) - Number(this.memoryNumber);

    sessionStorage.setItem(this.key, this.result);

    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: this.number };
  }
}
