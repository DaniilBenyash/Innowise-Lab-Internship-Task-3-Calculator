export class MR {
  execute() {
    this.number = sessionStorage.getItem('memory');
    if (this.number === '') {
      return {};
    }
    return { leftOperand: this.number };
  }

  redo() {
    return { leftOperand: this.number };
  }
}
