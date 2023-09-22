import { TenXCommand } from './tenXCommand';

describe('Ten multiply x command test', () => {
  test('Should execute command with right answer', () => {
    const tenXCommand = new TenXCommand(2);
    expect(tenXCommand.execute()).toStrictEqual({ leftOperand: 100 });
  });

  test('Should redo command with right answer', () => {
    const tenXCommand = new TenXCommand(5);
    tenXCommand.execute();
    expect(tenXCommand.redo()).toStrictEqual({ leftOperand: 5 });
  });
});
