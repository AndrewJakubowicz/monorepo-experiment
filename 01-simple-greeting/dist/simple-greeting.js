import {html, css, LitElement} from 'lit';

export class SimpleGreeting extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    name: {type: String},
  };

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`<p>Hello, ${this.name} from simple-greeting package!</p>`;
  }
}
customElements.define('simple-greeting-1', SimpleGreeting);
