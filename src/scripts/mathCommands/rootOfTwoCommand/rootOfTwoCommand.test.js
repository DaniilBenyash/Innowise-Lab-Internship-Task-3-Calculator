import { RootOfTwoCommand } from './rootOfTwoCommand';

describe('Root of two command test', () => {
  test('Should execute command with right answer', () => {
    const rootOfTwoCommand = new RootOfTwoCommand(9);
    expect(rootOfTwoCommand.execute()).toStrictEqual({ leftOperand: 3 });
  });

  test('Should redo command with right answer', () => {
    const rootOfTwoCommand = new RootOfTwoCommand(15);
    rootOfTwoCommand.execute();
    expect(rootOfTwoCommand.redo()).toStrictEqual({ leftOperand: 15 });
  });
});
