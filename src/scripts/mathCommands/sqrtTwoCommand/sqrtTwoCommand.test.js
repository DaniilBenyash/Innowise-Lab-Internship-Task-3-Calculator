import { SqrtTwoCommand } from './sqrtTwoCommand';

describe('Sqrt two command test', () => {
  test('Should execute command with right answer', () => {
    const sqrtTwoCommand = new SqrtTwoCommand(2);
    expect(sqrtTwoCommand.execute()).toStrictEqual({ leftOperand: 4 });
  });

  test('Should redo command with right answer', () => {
    const sqrtTwoCommand = new SqrtTwoCommand(6);
    sqrtTwoCommand.execute();
    expect(sqrtTwoCommand.redo()).toStrictEqual({ leftOperand: 6 });
  });
});
