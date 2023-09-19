export default class AllClear {
  execute() {
    this.a = {};
    return this.a;
  }

  // eslint-disable-next-line class-methods-use-this
  redo() {
    return {};
  }
}
