import { Component, Prop, State } from '@stencil/core';

/**
 * Web component to create paragraphs containing blind text.
 */
@Component({
  tag: 'mox-lorem-ipsum',
  styleUrl: 'lorem-ipsum.css',
  shadow: true
})
export class LoremIpsum {

  /**
   * The displayed paragraphs.
   */
  @State() paragraphs: string[] = [];

  /**
   * The number of paragraphs to create.
   */
  @Prop() count: number = 1;

  /**
   * Action before the component loaded.
   */
  componentWillLoad(): void {
    for (let i: number = 0; i < this.count; i++) {
      let paragraph: string = 'Cillum ut ad incididunt eiusmod amet esse deserunt incididunt eiusmod incididunt.';
      this.paragraphs = [...this.paragraphs, paragraph];
    }
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
