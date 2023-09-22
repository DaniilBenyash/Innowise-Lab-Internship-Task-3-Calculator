export class FactorialCommand {
  constructor(number) {
    this.number = number;
    this.factorial();
    this.backFactorial();
  }

  execute() {
    this.result = this.factorial(this.number);
    return { leftOperand: this.result };
  }

  factorial(number) {
    return number ? number * this.factorial(number - 1) : 1;
  }

  // eslint-disable-next-line class-methods-use-this
  backFactorial(number) {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= number - 1; i++) {
      // eslint-disable-next-line no-param-reassign
      number /= i;
    }
    return number;
  }

  redo() {
    return { leftOperand: this.backFactorial(this.result) };
  }
}
