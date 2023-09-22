import { MultiplyCommand } from './multiplyCommand';

describe('Multiply command test', () => {
  test('Should execute command with right answer', () => {
    const multiplyCommand = new MultiplyCommand(4, 2);
    expect(multiplyCommand.execute()).toStrictEqual({ leftOperand: 8 });
  });

  test('Should redo command with right answer', () => {
    const multiplyCommand = new MultiplyCommand(3, 3);
    multiplyCommand.execute();
    expect(multiplyCommand.redo()).toStrictEqual({ leftOperand: 3 });
  });
});
