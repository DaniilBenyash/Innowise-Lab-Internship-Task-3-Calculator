import compute from '../compute';
import calculator from '../calculator';

export default class HighOperation {
  constructor(operation) {
    this.operation = operation;
  }

  // eslint-disable-next-line consistent-return
  execute(data) {
    this.data = { ...data, operation: this.operation };
    if (this.operation === 'mr') {
      compute({ operation: this.operation });
    } else if (this.data.currentNumber === '' && this.data.previousNumber === '') {
      return data;
    } else if (this.data.currentNumber !== '' && this.data.previousNumber === '') {
      compute({ previousNumber: data.currentNumber, operation: this.operation });
    } else if (this.data.previousNumber !== '' && this.data.currentNumber === '') {
      compute({ ...data, operation: this.operation });
    } else if (!Object.values(data).includes('')) {
      compute(data);
      calculator.setCommand(new HighOperation(this.operation));
      calculator.executeCommand();
    }
  }

  redo() {
    return this.data;
  }
}
