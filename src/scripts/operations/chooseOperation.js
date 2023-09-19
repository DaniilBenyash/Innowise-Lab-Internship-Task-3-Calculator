import compute from '../compute';
import { operationOperand } from '../calculator';

export default class ChooseOperation {
  constructor(operation) {
    this.operation = operation;
  }

  // eslint-disable-next-line consistent-return
  execute(data) {
    this.data = data;
    if (this.data.currentNumber === '') {
      return this.data.previousNumber === '' ? data : { ...this.data, operation: this.operation };
    // eslint-disable-next-line no-else-return
    } else if (!Object.values(data).includes('')) {
      compute(this.data);
      operationOperand.innerHTML = this.operation;
    } else {
      return { previousNumber: data.currentNumber, operation: this.operation };
    }
  }

  redo() {
    return this.data;
  }
}
