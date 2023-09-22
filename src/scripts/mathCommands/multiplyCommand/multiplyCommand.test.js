import { MultiplyCommand } from './multiplyCommand';

const multiplyCommand = new MultiplyCommand(4, 2);

describe('Multiply command test', () => {
  test('Should execute command with right answer', () => {
    expect(multiplyCommand.execute()).toStrictEqual({ leftOperand: 8 });
  });

  test('Should redo command with right answer', () => {
    expect(multiplyCommand.redo()).toStrictEqual({ leftOperand: 4 });
  });
});
