import DivideCommand from './divideCommand';

// eslint-disable-next-line no-undef
test('DivideCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new DivideCommand(4, 2).execute()).toBe(2);
});
// eslint-disable-next-line no-undef
test('DivideCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new DivideCommand(4, 2).redo(2)).toBe(4);
});
