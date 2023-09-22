import { SqrtThreeCommand } from './sqrtThreeCommand';

const sqrtThreeCommand = new SqrtThreeCommand(2);

describe('Sqrt three command test', () => {
  test('Should execute command with right answer', () => {
    expect(sqrtThreeCommand.execute()).toStrictEqual({ leftOperand: 8 });
  });

  test('Should redo command with right answer', () => {
    expect(sqrtThreeCommand.redo()).toStrictEqual({ leftOperand: 2 });
  });
});
