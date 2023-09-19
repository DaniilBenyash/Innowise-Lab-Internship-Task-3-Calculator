import SqrtYCommand from './sqrtYCommand';

// eslint-disable-next-line no-undef
test('SqrtYCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new SqrtYCommand(2, 2).execute()).toBe(4);
});
// eslint-disable-next-line no-undef
test('SqrtYCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new SqrtYCommand(2, 2).redo(4)).toBe(2);
});
