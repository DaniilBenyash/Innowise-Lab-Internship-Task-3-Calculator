import { MPlus } from './m+';

describe('MPlus command test', () => {
  test('Should execute command with empty storage', () => {
    const key = 'memory';
    const mPlus = new MPlus(2);
    sessionStorage.setItem(key, '');
    expect(mPlus.execute()).toStrictEqual({ leftOperand: 2 });
  });
  test('Should execute command with right answer', () => {
    const key = 'memory';
    const mPlus = new MPlus(4);
    sessionStorage.setItem(key, 2);
    expect(mPlus.execute()).toStrictEqual({ leftOperand: 6 });
  });
  test('Should redo command with right answer', () => {
    const mPlus = new MPlus(2);
    expect(mPlus.redo()).toStrictEqual({ leftOperand: 2 });
  });
});
