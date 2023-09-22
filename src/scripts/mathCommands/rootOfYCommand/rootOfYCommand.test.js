import { RootOfYCommand } from './rootOfYCommand';

const rootOfYCommand = new RootOfYCommand(9, 2);

describe('Root of y command test', () => {
  test('Should execute command with right answer', () => {
    expect(rootOfYCommand.execute()).toStrictEqual({ leftOperand: 3 });
  });

  test('Should redo command with right answer', () => {
    expect(rootOfYCommand.redo()).toStrictEqual({ leftOperand: 9 });
  });
});
