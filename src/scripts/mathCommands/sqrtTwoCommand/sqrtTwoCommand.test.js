import SqrtTwoCommand from './sqrtTwoCommand';

// eslint-disable-next-line no-undef
test('SqrtTwoCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new SqrtTwoCommand(2).execute()).toBe(4);
});
// eslint-disable-next-line no-undef
test('SqrtTwoCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new SqrtTwoCommand().redo(4)).toBe(2);
});
