import { MMinus } from './m-';

describe('MMinus command test', () => {
  test('Should execute command with empty storage', () => {
    const key = 'memory';
    const mMinus = new MMinus(2);
    sessionStorage.setItem(key, '');
    expect(mMinus.execute()).toStrictEqual({ leftOperand: 2 });
  });
  test('Should execute command with right answer', () => {
    const key = 'memory';
    const mMinus = new MMinus(4);
    sessionStorage.setItem(key, 2);
    expect(mMinus.execute()).toStrictEqual({ leftOperand: 2 });
  });
  test('Should redo command with right answer', () => {
    const mMinus = new MMinus(3);
    expect(mMinus.redo()).toStrictEqual({ leftOperand: 3 });
  });
});
