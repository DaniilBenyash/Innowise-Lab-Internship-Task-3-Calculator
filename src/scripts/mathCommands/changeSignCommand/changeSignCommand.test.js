import { ChangeSignCommand } from './changeSignCommand';

describe('Change sign command test', () => {
  test('Should execute command with right answer', () => {
    const changeSignCommand = new ChangeSignCommand(2);
    expect(changeSignCommand.execute()).toStrictEqual({ leftOperand: -2 });
  });

  test('Should redo command with right answer', () => {
    const changeSignCommand = new ChangeSignCommand(-2);
    changeSignCommand.execute();
    expect(changeSignCommand.redo()).toStrictEqual({ leftOperand: -2 });
  });
});
