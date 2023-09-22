import { RootOfTwoCommand } from './rootOfTwoCommand';

const rootOfTwoCommand = new RootOfTwoCommand(9);

describe('Root of two command test', () => {
  test('Should execute command with right answer', () => {
    expect(rootOfTwoCommand.execute()).toStrictEqual({ leftOperand: 3 });
  });

  test('Should redo command with right answer', () => {
    expect(rootOfTwoCommand.redo()).toStrictEqual({ leftOperand: 9 });
  });
});
