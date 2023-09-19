import TenXCommand from './tenXCommand';

// eslint-disable-next-line no-undef
test('TenXCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new TenXCommand(2).execute()).toBe(100);
});
// eslint-disable-next-line no-undef
test('TenXCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new TenXCommand(2).redo()).toBe(2);
});
