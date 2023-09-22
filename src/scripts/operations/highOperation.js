import { compute } from '../compute';
import { calculator, leftOperand } from '../calculator';

export class HighOperation {
  constructor(operands, operation) {
    this.operands = operands;
    this.operation = operation;
  }

  execute() {
    const checkRightOperandHasValue = this.operands.rightOperand !== '';
    const checkLeftOperandHasValue = this.operands.leftOperand !== '';
    const checkBothOperandsHasValue = !Object.values(this.operands).includes('');

    if (!checkRightOperandHasValue && !checkLeftOperandHasValue) {
      return this.operands;
    }

    if (checkRightOperandHasValue && !checkLeftOperandHasValue) {
      compute({ leftOperand: this.operands.rightOperand, operationOperand: this.operation });
      return {
        leftOperand: leftOperand.innerHTML,
        rightOperand: '',
        operationOperand: '',
      };
    }

    if (checkLeftOperandHasValue && !checkRightOperandHasValue) {
      compute({ ...this.operands, operationOperand: this.operation });
      return {
        leftOperand: leftOperand.innerHTML,
        rightOperand: '',
        operationOperand: '',
      };
    }

    if (checkBothOperandsHasValue) {
      compute(this.operands);
      calculator.setCommand(new HighOperation(this.operation));
      calculator.executeCommand();
      return {
        leftOperand: leftOperand.innerHTML,
        rightOperand: '',
        operationOperand: '',
      };
    }

    return this.operands;
  }

  redo() {
    return this.operands;
  }
}
