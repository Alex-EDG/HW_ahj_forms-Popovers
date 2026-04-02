export default class Tooltip {
  constructor(title, message) {
    this.container = null;
    this.component = null;
    this.title = title;
    this.message = message;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  static markup(title, message) {
    return `<div class="tooltip__content">
                <h3 class="tooltip__title">${title}</h3>
                <div class="tooltip__text">${message}</div>
            </div>
            <div class="tooltip__arrow"></div>`;
  }

  creatTooltip() {
    this.checkBinding();
    this.component = document.createElement('div');
    this.component.className = 'component__tooltip tooltip d_none';
    this.component.innerHTML = Tooltip.markup(this.title, this.message);
    this.container.appendChild(this.component);
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('container is not bind to DOM');
    }
  }
}
