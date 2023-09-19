import RootOfThreeCommand from './rootOfThreeCommand';

// eslint-disable-next-line no-undef
test('RootOfThreeCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new RootOfThreeCommand(27).execute()).toBe(3);
});
// eslint-disable-next-line no-undef
test('RootOfThreeCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new RootOfThreeCommand().redo(3)).toBe(27);
});
