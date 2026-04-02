import Button from '../Button';

const button = new Button('Нажми на меня');
button.bindToDOM(document.body);

test('Метод creatButton создаёт и вставяет элемент кнопки в DOM', () => {
  button.creatButton();
  expect(document.querySelector('.component__button')).toBeInstanceOf(HTMLElement);
  expect(document.body.children[0].innerHTML).toBe(Button.markup('Нажми на меня'));
});

test('bindToDOM формирует ошибку', () => {
  expect(() => button.bindToDOM(null)).toThrow();
});

test('checkBinding формирует ошибку', () => {
  button.container = null;
  expect(() => button.checkBinding()).toThrow();
});
