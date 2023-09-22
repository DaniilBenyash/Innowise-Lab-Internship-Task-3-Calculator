import { SqrtTwoCommand } from './sqrtTwoCommand';

const sqrtTwoCommand = new SqrtTwoCommand(2);

describe('Sqrt two command test', () => {
  test('Should execute command with right answer', () => {
    expect(sqrtTwoCommand.execute()).toStrictEqual({ leftOperand: 4 });
  });

  test('Should redo command with right answer', () => {
    expect(sqrtTwoCommand.redo()).toStrictEqual({ leftOperand: 2 });
  });
});
