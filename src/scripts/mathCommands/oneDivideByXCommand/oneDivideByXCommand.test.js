import { OneDivideByXCommand } from './oneDivideByXCommand';

const oneDivideByXCommand = new OneDivideByXCommand(2);

describe('One divide by x command test', () => {
  test('Should execute command with right answer', () => {
    expect(oneDivideByXCommand.execute()).toStrictEqual({ leftOperand: 0.5 });
  });

  test('Should redo command with right answer', () => {
    expect(oneDivideByXCommand.redo()).toStrictEqual({ leftOperand: 2 });
  });
});
