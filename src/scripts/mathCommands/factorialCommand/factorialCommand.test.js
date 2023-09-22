import { FactorialCommand } from './factorialCommand';

describe('Factorial command test', () => {
  test('Should execute command with right answer', () => {
    const factorialCommand = new FactorialCommand(5);
    expect(factorialCommand.execute()).toStrictEqual({ leftOperand: 120 });
  });

  test('Should redo command with right answer', () => {
    const factorialCommand = new FactorialCommand(4);
    factorialCommand.execute();
    expect(factorialCommand.redo()).toStrictEqual({ leftOperand: 4 });
  });
});
