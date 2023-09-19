import FactorialCommand from './factorialCommand';

// eslint-disable-next-line no-undef
test('FactorialCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new FactorialCommand(5).execute()).toBe(120);
});
// eslint-disable-next-line no-undef
test('FactorialCommand', () => {
  // eslint-disable-next-line no-undef
  expect(new FactorialCommand().redo(120)).toBe(5);
});
