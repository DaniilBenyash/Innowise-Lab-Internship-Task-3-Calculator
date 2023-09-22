import { SqrtYCommand } from './sqrtYCommand';

const sqrtYCommand = new SqrtYCommand(2, 2);

describe('Sqrt y command test', () => {
  test('Should execute command with right answer', () => {
    expect(sqrtYCommand.execute()).toStrictEqual({ leftOperand: 4 });
  });

  test('Should redo command with right answer', () => {
    expect(sqrtYCommand.redo()).toStrictEqual({ leftOperand: 2 });
  });
});
