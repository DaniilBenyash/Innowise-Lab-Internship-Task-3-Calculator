import { MMinus } from './m-';
import { setSessionStorage } from '../../sessionStorage';

const mMinus = new MMinus(2);

describe('MMinus command test', () => {
  test('Should execute command with empty storage', () => {
    setSessionStorage('');
    expect(mMinus.execute()).toStrictEqual({ leftOperand: 2 });
  });
  test('Should execute command with right answer', () => {
    setSessionStorage(2);
    expect(mMinus.execute()).toStrictEqual({ leftOperand: 0 });
  });
  test('Should redo command with right answer', () => {
    expect(mMinus.redo()).toStrictEqual({ leftOperand: 2 });
  });
});
