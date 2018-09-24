import { TestWindow } from '@stencil/core/testing';
import { LoremIpsum } from './lorem-ipsum';

describe('lorem-ipsum', () => {
  it('should build', () => {
    expect(new LoremIpsum()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLLoremIpsumElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [LoremIpsum],
        html: '<mox-lorem-ipsum></mox-lorem-ipsum>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent).not.toBe('');
      expect(element.querySelectorAll('p').length).toBe(1);
    });

    describe('count', () => {
      it('should not display any paragraphs for counts less than 1', async () => {
        element.count = 0;
        await testWindow.flush();
        expect(element.textContent).toBe('');
        expect(element.querySelectorAll('p').length).toBe(0);
      });

      it('should display one paragraph for invalid counts', async () => {
        element.count = 'three';
        await testWindow.flush();
        expect(element.textContent).not.toBe('');
        expect(element.querySelectorAll('p').length).toBe(1);
      });

      it('should work with counts larger than 1', async () => {
        let count: number = 3;
        element.count = count;
        await testWindow.flush();
        expect(element.textContent).not.toBe('');
        expect(element.querySelectorAll('p').length).toBe(count);
      });
    });
  });
});
