import { MandatoryPipe } from './mandatory-pipe';

describe('MandatoryPipe', () => {
  it('create an instance', () => {
    const pipe = new MandatoryPipe();
    expect(pipe).toBeTruthy();
  });
});
