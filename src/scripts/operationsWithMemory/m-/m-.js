export default class MMinus {
  constructor(number) {
    this.number = number;
  }

  execute() {
    this.memoryNumber = Number(sessionStorage.getItem('memory'));
    return this.number - this.memoryNumber;
  }

  redo() {
    return this.number;
  }
}