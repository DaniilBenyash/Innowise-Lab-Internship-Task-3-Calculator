import { TenXCommand } from './tenXCommand';

const tenXCommand = new TenXCommand(2);

describe('Ten multiply x command test', () => {
  test('Should execute command with right answer', () => {
    expect(tenXCommand.execute()).toStrictEqual({ leftOperand: 100 });
  });

  test('Should redo command with right answer', () => {
    expect(tenXCommand.redo()).toStrictEqual({ leftOperand: 2 });
  });
});
