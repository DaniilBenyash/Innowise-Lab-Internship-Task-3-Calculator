import { OneDivideByXCommand } from './oneDivideByXCommand';

describe('One divide by x command test', () => {
  test('Should execute command with right answer', () => {
    const oneDivideByXCommand = new OneDivideByXCommand(2);
    expect(oneDivideByXCommand.execute()).toStrictEqual({ leftOperand: 0.5 });
  });

  test('Should redo command with right answer', () => {
    const oneDivideByXCommand = new OneDivideByXCommand(5);
    oneDivideByXCommand.execute();
    expect(oneDivideByXCommand.redo()).toStrictEqual({ leftOperand: 5 });
  });
});
