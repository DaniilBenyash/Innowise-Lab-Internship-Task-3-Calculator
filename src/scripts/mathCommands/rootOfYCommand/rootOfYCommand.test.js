import { RootOfYCommand } from './rootOfYCommand';

describe('Root of y command test', () => {
  test('Should execute command with right answer', () => {
    const rootOfYCommand = new RootOfYCommand(9, 2);
    expect(rootOfYCommand.execute()).toStrictEqual({ leftOperand: 3 });
  });

  test('Should redo command with right answer', () => {
    const rootOfYCommand = new RootOfYCommand(27, 3);
    rootOfYCommand.execute();
    expect(rootOfYCommand.redo()).toStrictEqual({ leftOperand: 27 });
  });
});
