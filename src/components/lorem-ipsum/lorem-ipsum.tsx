import { Component, Prop, State, Watch } from '@stencil/core';

/**
 * Web component to create paragraphs containing filler text.
 */
@Component({
  tag: 'mox-lorem-ipsum',
  styleUrl: 'lorem-ipsum.css',
  shadow: true
})
export class LoremIpsum {

  /**
   * The default count to set if no valid value is specified.
   */
  DEFAULT_COUNT: number = 1;

  /**
   * Collection of filler text paragraphs.
   */
  LOREM_IPSUM_PARAGRAPHS: string[] = [
    'Enim laborum dolor dolor sint ea laboris veniam nulla aute incididunt dolor pariatur do.',
    'Ex officia ex eu ad aliqua voluptate qui pariatur.',
    'Tempor consequat ipsum mollit est voluptate est mollit in Lorem tempor labore voluptate officia commodo do.',
    'Ipsum minim qui deserunt laboris sit consectetur laborum et ex do est quis magna commodo aliquip officia.',
    'Excepteur ex deserunt consequat deserunt elit consectetur ea sunt ut ea enim culpa magna anim voluptate cupidatat.',
    'In cupidatat quis adipisicing labore esse aliquip velit non deserunt nostrud.',
    'Cillum ad enim amet consectetur amet non in voluptate tempor laborum enim eiusmod.',
    'Quis eiusmod eu esse cupidatat et voluptate eiusmod sit commodo id labore qui.',
    'Nulla magna pariatur pariatur do ut eiusmod amet culpa cupidatat laborum do dolor aliquip ipsum eiusmod.',
    'Incididunt est est nulla sit exercitation non minim ex esse enim commodo laborum commodo ea reprehenderit occaecat.'
  ];

  /**
   * The displayed paragraphs.
   */
  @State() paragraphs: string[] = [];

  /**
   * The number of paragraphs to create.
   */
  @Prop() count: number;

  /**
   * Watches for changes in the count property.
   */
  @Watch('count')
  countChanged() {
    this.updateState();
  }

  /**
   * Action before the component loaded.
   */
  componentWillLoad(): void {
    this.updateState();
  }

  /**
   * Returns a random string of filler text.
   * @return A random string of filler text.
   */
  randomParagraph(): string {
    return this.LOREM_IPSUM_PARAGRAPHS[Math.floor(
        Math.random() * this.LOREM_IPSUM_PARAGRAPHS.length)];
  }

  /**
   * Updates the paragraphs displayed in the component.
   */
  updateState(): void {
    /* Initialize values. */
    let count: number = (isNaN(this.count)) ? this.DEFAULT_COUNT : this.count;
    let paragraphs: string[] = [];

    /* Determine paragraphs. */
    for (let i: number = 0; i < count; i++) {
      paragraphs.push(this.randomParagraph());
    }

    /* Update paragraphs. */
    this.paragraphs = paragraphs;
  }

  /**
   * Renders the lorem ipsum component.
   */
  render() {
    return (
      <div>
        {this.paragraphs.map(paragraph =>
          <p>{paragraph}</p>
        )}
      </div>
    );
  }
}
