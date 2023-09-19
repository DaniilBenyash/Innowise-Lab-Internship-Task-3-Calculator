import SqrtThreeCommand from './sqrtThreeCommand';

// eslint-disable-next-line no-undef
test('SqrtThreeCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new SqrtThreeCommand(2).execute()).toBe(8);
});
// eslint-disable-next-line no-undef
test('SqrtThreeCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new SqrtThreeCommand().redo(8)).toBe(2);
});
