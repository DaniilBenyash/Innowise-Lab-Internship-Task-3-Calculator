import { MPlus } from './m+';
import { setSessionStorage } from '../../sessionStorage';

const mPlus = new MPlus(2);

describe('MPlus command test', () => {
  test('Should execute command with empty storage', () => {
    setSessionStorage('');
    expect(mPlus.execute()).toStrictEqual({ leftOperand: 2 });
  });
  test('Should execute command with right answer', () => {
    setSessionStorage(2);
    expect(mPlus.execute()).toStrictEqual({ leftOperand: 4 });
  });
  test('Should redo command with right answer', () => {
    expect(mPlus.redo()).toStrictEqual({ leftOperand: 2 });
  });
});
