export class MPlus {
  constructor(number, key) {
    this.number = number;
    this.key = key;
  }

  execute() {
    const key = 'memory';

    this.memoryNumber = Number(sessionStorage.getItem(key));

    if (this.memoryNumber === '') {
      return this.number;
    }

    this.result = Number(this.number) + Number(this.memoryNumber);

    sessionStorage.setItem(key, this.result);

    return { leftOperand: this.result };
  }

  redo() {
    return { leftOperand: this.number };
  }
}
