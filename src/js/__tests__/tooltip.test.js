import Tooltip from '../Tooltip';

const tooltip = new Tooltip('Title', 'This is tooltip');
tooltip.bindToDOM(document.body);

test('Метод creatButton создаёт и вставяет элемент кнопки в DOM', () => {
  tooltip.creatTooltip();
  expect(document.querySelector('.component__tooltip')).toBeInstanceOf(HTMLElement);
  expect(document.body.children[0].innerHTML).toBe(Tooltip.markup('Title', 'This is tooltip'));
});

test('bindToDOM формирует ошибку', () => {
  expect(() => tooltip.bindToDOM(null)).toThrow();
});

test('checkBinding формирует ошибку', () => {
  tooltip.container = null;
  expect(() => tooltip.checkBinding()).toThrow();
});
