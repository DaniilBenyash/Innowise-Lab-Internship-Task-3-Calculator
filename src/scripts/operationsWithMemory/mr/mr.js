export default class MR {
  execute() {
    this.number = sessionStorage.getItem('memory');
    return this.number === '' ? {} : Number(this.number);
  }

  redo() {
    return this.number;
  }
}
