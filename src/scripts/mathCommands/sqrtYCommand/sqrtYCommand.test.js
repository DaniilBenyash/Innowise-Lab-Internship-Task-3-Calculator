import { SqrtYCommand } from './sqrtYCommand';

describe('Sqrt y command test', () => {
  test('Should execute command with right answer', () => {
    const sqrtYCommand = new SqrtYCommand(2, 2);
    expect(sqrtYCommand.execute()).toStrictEqual({ leftOperand: 4 });
  });

  test('Should redo command with right answer', () => {
    const sqrtYCommand = new SqrtYCommand(4, 3);
    sqrtYCommand.execute();
    expect(sqrtYCommand.redo()).toStrictEqual({ leftOperand: 4 });
  });
});
