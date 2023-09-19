export default class MS {
  constructor(number) {
    this.number = number;
  }

  execute() {
    this.number = sessionStorage.setItem('memory', this.number);
    return this.number;
  }

  redo() {
    return this.number;
  }
}
