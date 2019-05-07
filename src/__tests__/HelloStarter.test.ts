import { HelloStarter } from '../index';
test('My Greeter', () => {
  expect(HelloStarter('John')).toBe('Hello John');
});
