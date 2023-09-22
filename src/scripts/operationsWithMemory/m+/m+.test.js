import { MPlus } from './m+';

const mPlus = new MPlus(2);
const key = 'memory';

describe('MPlus command test', () => {
  test('Should execute command with empty storage', () => {
    sessionStorage.setItem(key, '');
    expect(mPlus.execute()).toStrictEqual({ leftOperand: 2 });
  });
  test('Should execute command with right answer', () => {
    sessionStorage.setItem(key, 2);
    expect(mPlus.execute()).toStrictEqual({ leftOperand: 4 });
  });
  test('Should redo command with right answer', () => {
    expect(mPlus.redo()).toStrictEqual({ leftOperand: 2 });
  });
});
