import { AddCommand } from './addCommand';

describe('Add command test', () => {
  test('Should execute command with right answer', () => {
    const addCommand = new AddCommand(1, 2);
    expect(addCommand.execute()).toStrictEqual({ leftOperand: 3 });
  });

  test('Should redo command with right answer', () => {
    const addCommand = new AddCommand(3, 7);
    addCommand.execute();
    expect(addCommand.redo()).toStrictEqual({ leftOperand: 3 });
  });
});
