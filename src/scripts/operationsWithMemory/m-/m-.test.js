import { MMinus } from './m-';

const mMinus = new MMinus(2);
const key = 'memory';

describe('MMinus command test', () => {
  test('Should execute command with empty storage', () => {
    sessionStorage.setItem(key, '');
    expect(mMinus.execute()).toStrictEqual({ leftOperand: 2 });
  });
  test('Should execute command with right answer', () => {
    sessionStorage.setItem(key, 2);
    expect(mMinus.execute()).toStrictEqual({ leftOperand: 0 });
  });
  test('Should redo command with right answer', () => {
    expect(mMinus.redo()).toStrictEqual({ leftOperand: 2 });
  });
});
