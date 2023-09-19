import compute from '../compute';

export default class GetAnswer {
  // eslint-disable-next-line consistent-return
  execute(data) {
    this.data = data;
    if (Object.values(this.data).includes('')) {
      return this.data;
    }
    compute(data);
  }

  redo() {
    return this.data;
  }
}
