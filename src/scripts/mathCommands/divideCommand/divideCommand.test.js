import { DivideCommand } from './divideCommand';

describe('Divide command test', () => {
  test('Should execute command with right answer', () => {
    const divideCommand = new DivideCommand(4, 2);
    expect(divideCommand.execute()).toStrictEqual({ leftOperand: 2 });
  });

  test('Should redo command with right answer', () => {
    const divideCommand = new DivideCommand(8, 2);
    divideCommand.execute();
    expect(divideCommand.redo()).toStrictEqual({ leftOperand: 8 });
  });
});
