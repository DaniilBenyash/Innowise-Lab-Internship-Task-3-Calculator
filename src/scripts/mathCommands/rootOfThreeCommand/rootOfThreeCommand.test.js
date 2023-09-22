import { RootOfThreeCommand } from './rootOfThreeCommand';

const rootOfThreeCommand = new RootOfThreeCommand(27);

describe('Root of three command test', () => {
  test('Should execute command with right answer', () => {
    expect(rootOfThreeCommand.execute()).toStrictEqual({ leftOperand: 3 });
  });

  test('Should redo command with right answer', () => {
    expect(rootOfThreeCommand.redo()).toStrictEqual({ leftOperand: 27 });
  });
});
