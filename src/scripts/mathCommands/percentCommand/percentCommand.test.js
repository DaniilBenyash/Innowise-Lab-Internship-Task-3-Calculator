import PercentCommand from './percentCommand';

// eslint-disable-next-line no-undef
test('PercentCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new PercentCommand(10).execute()).toBe(0.1);
});
// eslint-disable-next-line no-undef
test('PercentCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new PercentCommand().redo(0.1)).toBe(10);
});
