import RootOfTwoCommand from './rootOfTwoCommand';

// eslint-disable-next-line no-undef
test('RootOfTwoCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new RootOfTwoCommand(9).execute()).toBe(3);
});
// eslint-disable-next-line no-undef
test('RootOfTwoCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new RootOfTwoCommand().redo(3)).toBe(9);
});
