import { CustomReveseStringPipe } from './custom-revese-string.pipe';

describe('CustomReveseStringPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomReveseStringPipe();
    expect(pipe).toBeTruthy();
  });
});
