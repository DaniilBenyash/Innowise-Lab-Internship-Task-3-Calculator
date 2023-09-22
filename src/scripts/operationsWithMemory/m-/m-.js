export class MMinus {
  constructor(number) {
    this.number = number;
  }

  execute() {
    const key = 'memory';

    this.memoryNumber = Number(sessionStorage.getItem(key));

    if (this.memoryNumber === '') {
      return this.number;
    }

    this.result = Number(this.number) - Number(this.memoryNumber);

    sessionStorage.setItem(key, this.result);

    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: this.number };
  }
}
