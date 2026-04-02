export default class Button {
  constructor(textContent) {
    this.container = null;
    this.component = null;
    this.textContent = textContent;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  static markup(text) {
    return `<button class="button">${text}</button>`;
  }

  creatButton() {
    this.checkBinding();
    this.component = document.createElement('div');
    this.component.className = 'component__button';
    this.component.innerHTML = Button.markup(this.textContent);
    this.container.appendChild(this.component);
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('container is not bind to DOM');
    }
  }
}
