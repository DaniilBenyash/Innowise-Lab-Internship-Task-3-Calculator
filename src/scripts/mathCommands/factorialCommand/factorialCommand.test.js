import { FactorialCommand } from './factorialCommand';

const factorialCommand = new FactorialCommand(5);

describe('Factorial command test', () => {
  test('Should execute command with right answer', () => {
    expect(factorialCommand.execute()).toStrictEqual({ leftOperand: 120 });
  });

  test('Should redo command with right answer', () => {
    expect(factorialCommand.redo()).toStrictEqual({ leftOperand: 5 });
  });
});
