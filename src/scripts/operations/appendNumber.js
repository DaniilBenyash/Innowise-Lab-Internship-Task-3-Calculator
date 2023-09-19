export default class AppendNumber {
  constructor(number) {
    this.number = number;
  }

  execute(data) {
    this.data = data;

    if (data.currentNumber === '0' && this.number !== '0' && this.number !== '.') return { currentNumber: this.number };
    if (data.currentNumber === '0' && this.number === '0') return this.data;

    return this.number === '.' && data.currentNumber.includes('.') ? data : { ...data, currentNumber: data.currentNumber + this.number };
  }

  redo() {
    return this.data;
  }
}
