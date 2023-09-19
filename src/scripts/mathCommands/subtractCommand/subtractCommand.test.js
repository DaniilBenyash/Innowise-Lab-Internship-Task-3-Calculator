import SubtractCommand from './subtractCommand';

// eslint-disable-next-line no-undef
test('SubtractCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new SubtractCommand(4, 2).execute()).toBe(2);
});
// eslint-disable-next-line no-undef
test('SubtractCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new SubtractCommand(4, 2).redo(2)).toBe(4);
});
