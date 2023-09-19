import MultiplyCommand from './multiplyCommand';

// eslint-disable-next-line no-undef
test('MultiplyCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new MultiplyCommand(4, 2).execute()).toBe(8);
});
// eslint-disable-next-line no-undef
test('MultiplyCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new MultiplyCommand(4, 2).redo(8)).toBe(4);
});
