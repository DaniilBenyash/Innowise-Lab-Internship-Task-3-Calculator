import { ChangeSignCommand } from './changeSignCommand';

const changeSignCommand = new ChangeSignCommand(2);

describe('Change sign command test', () => {
  test('Should execute command with right answer', () => {
    expect(changeSignCommand.execute()).toStrictEqual({ leftOperand: -2 });
  });

  test('Should redo command with right answer', () => {
    expect(changeSignCommand.redo()).toStrictEqual({ leftOperand: 2 });
  });
});
