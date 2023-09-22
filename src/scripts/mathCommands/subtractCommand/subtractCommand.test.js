import { SubtractCommand } from './subtractCommand';

describe('Subtract command test', () => {
  test('Should execute command with right answer', () => {
    const subtractCommand = new SubtractCommand(4, 2);
    expect(subtractCommand.execute()).toStrictEqual({ leftOperand: 2 });
  });

  test('Should redo command with right answer', () => {
    const subtractCommand = new SubtractCommand(27, 2);
    subtractCommand.execute();
    expect(subtractCommand.redo()).toStrictEqual({ leftOperand: 27 });
  });
});
