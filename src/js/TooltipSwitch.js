export default class TooltipSwitch {
  constructor(button, tooltip) {
    this.container = null;
    this.button = button;
    this.tooltip = tooltip;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  init() {
    this.drawUI();
    const targetEl = this.button.component.children[0];
    targetEl.addEventListener('click', () => this.showTooltip(targetEl));
  }

  drawUI() {
    this.checkBinding();
    this.button.bindToDOM(this.container);
    this.tooltip.bindToDOM(document.body);
    this.button.creatButton();
    this.tooltip.creatTooltip();
  }

  showTooltip(targetElem) {
    this.tooltip.component.classList.toggle('d_none');
    const coordsTarget = targetElem.getBoundingClientRect();
    const coordsTooltip = this.tooltip.component.getBoundingClientRect();
    this.tooltip.component.style.bottom = `${coordsTarget.top + coordsTarget.height + 7}px`;
    this.tooltip.component.style.left = `${coordsTarget.left - (coordsTooltip.width / 2 - coordsTarget.width / 2)}px`;
    setTimeout(() => {
      this.tooltip.component.classList.add('d_none');
    }, 2000);
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('container is not bind to DOM');
    }
  }
}
