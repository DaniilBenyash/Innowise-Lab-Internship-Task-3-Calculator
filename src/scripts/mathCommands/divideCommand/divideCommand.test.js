import { DivideCommand } from './divideCommand';

const divideCommand = new DivideCommand(4, 2);

describe('Divide command test', () => {
  test('Should execute command with right answer', () => {
    expect(divideCommand.execute()).toStrictEqual({ leftOperand: 2 });
  });

  test('Should redo command with right answer', () => {
    expect(divideCommand.redo()).toStrictEqual({ leftOperand: 4 });
  });
});
