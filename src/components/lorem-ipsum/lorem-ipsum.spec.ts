import { TestWindow } from '@stencil/core/testing';
import { LoremIpsum } from './lorem-ipsum';

describe('lorem-ipsum', () => {
  it('should build', () => {
    expect(new LoremIpsum()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [LoremIpsum],
        html: '<lorem-ipsum></lorem-ipsum>'
      });
    });
  });
});
