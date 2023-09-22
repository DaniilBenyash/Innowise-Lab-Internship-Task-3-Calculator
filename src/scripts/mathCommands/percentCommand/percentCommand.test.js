import { PercentCommand } from './percentCommand';

describe('Percent command test', () => {
  test('Should execute command with right answer', () => {
    const percentCommand = new PercentCommand(10);
    expect(percentCommand.execute()).toStrictEqual({ leftOperand: 0.1 });
  });

  test('Should redo command with right answer', () => {
    const percentCommand = new PercentCommand(15);
    percentCommand.execute();
    expect(percentCommand.redo()).toStrictEqual({ leftOperand: 15 });
  });
});
