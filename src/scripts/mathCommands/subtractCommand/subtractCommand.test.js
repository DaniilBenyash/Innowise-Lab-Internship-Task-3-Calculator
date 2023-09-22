import { SubtractCommand } from './subtractCommand';

const subtractCommand = new SubtractCommand(4, 2);

describe('Subtract command test', () => {
  test('Should execute command with right answer', () => {
    expect(subtractCommand.execute()).toStrictEqual({ leftOperand: 2 });
  });

  test('Should redo command with right answer', () => {
    expect(subtractCommand.redo()).toStrictEqual({ leftOperand: 4 });
  });
});
