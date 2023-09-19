import RootOfYCommand from './rootOfYCommand';

// eslint-disable-next-line no-undef
test('RootOfYCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new RootOfYCommand(9, 2).execute()).toBe(3);
});
// eslint-disable-next-line no-undef
test('RootOfYCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new RootOfYCommand(9, 2).redo(3)).toBe(9);
});
