import { SqrtThreeCommand } from './sqrtThreeCommand';

describe('Sqrt three command test', () => {
  test('Should execute command with right answer', () => {
    const sqrtThreeCommand = new SqrtThreeCommand(2);
    expect(sqrtThreeCommand.execute()).toStrictEqual({ leftOperand: 8 });
  });

  test('Should redo command with right answer', () => {
    const sqrtThreeCommand = new SqrtThreeCommand(3);
    sqrtThreeCommand.execute();
    expect(sqrtThreeCommand.redo()).toStrictEqual({ leftOperand: 3 });
  });
});
