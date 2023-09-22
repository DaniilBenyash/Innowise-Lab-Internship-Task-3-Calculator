export class AllClear {
  constructor(operands) {
    this.operands = operands;
  }

  execute() {
    this.emptyOperands = {};
    return this.emptyOperands;
  }

  redo() {
    return this.operands;
  }
}
