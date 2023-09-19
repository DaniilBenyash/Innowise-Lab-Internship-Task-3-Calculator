import ChangeSignCommand from './changeSignCommand';

// eslint-disable-next-line no-undef
test('ChangeSignCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new ChangeSignCommand(2).execute()).toBe(-2);
});
// eslint-disable-next-line no-undef
test('ChangeSignCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new ChangeSignCommand().redo(-2)).toBe(2);
});
