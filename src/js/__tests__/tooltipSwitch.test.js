import TooltipSwitch from '../TooltipSwitch';
import Button from '../Button';
import Tooltip from '../Tooltip';

const button = new Button('Button');
const tooltip = new Tooltip('Title', 'content');
const tooltipSwitch = new TooltipSwitch(button, tooltip);
tooltipSwitch.bindToDOM(document.body);

test('Метод drawUI создаёт стартовую страницу', () => {
  tooltipSwitch.drawUI();
  expect(document.body.children.length).toBe(2);
  expect(document.body.children[0].innerHTML).toBe(Button.markup('Button'));
  expect(document.body.children[1].innerHTML).toBe(Tooltip.markup('Title', 'content'));
});

test('Метод showTooltip удаляет класс d_none', () => {
  tooltipSwitch.showTooltip(button.component);
  expect(tooltip.component.className).toBe('component__tooltip tooltip');
});

test('Метод bindToDOM формирует ошибку', () => {
  expect(() => tooltipSwitch.bindToDOM(null)).toThrow();
});

test('Метод checkBinding формирует ошибку', () => {
  tooltipSwitch.container = null;
  expect(() => tooltipSwitch.checkBinding()).toThrow();
});
