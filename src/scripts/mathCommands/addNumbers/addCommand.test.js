import { AddCommand } from './addCommand';

const addCommand = new AddCommand(1, 2);

describe('Add command test', () => {
  test('Should execute command with right answer', () => {
    expect(addCommand.execute()).toStrictEqual({ leftOperand: 3 });
  });

  test('Should redo command with right answer', () => {
    expect(addCommand.redo()).toStrictEqual({ leftOperand: 1 });
  });
});
