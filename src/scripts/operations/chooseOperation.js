import { compute } from '../compute';
import { operationOperand, leftOperand, rightOperand } from '../calculator';

export class ChooseOperation {
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
    if (!checkRightOperandHasValue && checkLeftOperandHasValue) {
      return { ...this.operands, operationOperand: this.operation };
    }

    if (checkBothOperandsHasValue) {
      compute(this.operands);
      return {
        leftOperand: leftOperand.innerHTML,
        rightOperand: rightOperand.innerHTML,
        operationOperand: operationOperand.innerHTML,
      };
    }

    return { leftOperand: this.operands.rightOperand, operationOperand: this.operation };
  }

  redo() {
    return this.operands;
  }
}
