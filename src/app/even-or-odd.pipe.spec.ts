import { EvenOrOddPipe } from './even-or-odd.pipe';

describe('EvenOrOddPipe', () => {
  it('create an instance', () => {
    const pipe = new EvenOrOddPipe();
    expect(pipe).toBeTruthy();
  });
});
