import AddCommand from './addCommand';

// eslint-disable-next-line no-undef
test('AddCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new AddCommand(1, 2).execute()).toBe(3);
});
// eslint-disable-next-line no-undef
test('AddCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new AddCommand(1, 2).redo(3)).toBe(1);
});
