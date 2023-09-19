import OneDivideByXCommand from './oneDivideByXCommand';

// eslint-disable-next-line no-undef
test('OneDivideByXCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new OneDivideByXCommand(2).execute()).toBe(0.5);
});
// eslint-disable-next-line no-undef
test('OneDivideByXCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new OneDivideByXCommand().redo(0.5)).toBe(2);
});
