import { RootOfThreeCommand } from './rootOfThreeCommand';

describe('Root of three command test', () => {
  test('Should execute command with right answer', () => {
    const rootOfThreeCommand = new RootOfThreeCommand(27);
    expect(rootOfThreeCommand.execute()).toStrictEqual({ leftOperand: 3 });
  });

  test('Should redo command with right answer', () => {
    const rootOfThreeCommand = new RootOfThreeCommand(13);
    rootOfThreeCommand.execute();
    expect(rootOfThreeCommand.redo()).toStrictEqual({ leftOperand: 13 });
  });
});
