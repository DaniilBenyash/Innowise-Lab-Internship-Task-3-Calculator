import { PercentCommand } from './percentCommand';

const percentCommand = new PercentCommand(10);

describe('Percent command test', () => {
  test('Should execute command with right answer', () => {
    expect(percentCommand.execute()).toStrictEqual({ leftOperand: 0.1 });
  });

  test('Should redo command with right answer', () => {
    expect(percentCommand.redo()).toStrictEqual({ leftOperand: 10 });
  });
});
