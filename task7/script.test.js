// script.test.js
const {  checkInput, initApp } = require("./script.js");

let input, button, container;
// Mock DOM окружение
beforeEach(() => {
  document.body.innerHTML = `
        <p class="pOut"></p>
        <input type="text" class="myi">
        <button class="myb" hidden="true">Send</button>
    `;
    input = document.querySelector('.myi');
    button = document.querySelector('.myb');
    container = document.querySelector('.pOut');
});

describe("Работа кнопки", () => {
  test("Пустая строка делает кнопку неактивной", () => {
    input.value = "";
    checkInput(input, button);
    expect(button.hidden).toBe(true);
  });

  test("Строка только с пробелами делает кнопку неактивной", () => {
    input.value = "   ";
    checkInput(input, button);
    expect(button.hidden).toBe(true);
  });

  test("Ввод текста делает кнопку активной", () => {
    input.value = "Новый текст";
    checkInput(input, button);
    expect(button.hidden).toBe(false);
  });

  test("Очистка поля деактивирует кнопку", () => {
    initApp();
    input.value = "Текст";
    checkInput(input, button);
    expect(button.hidden).toBe(false);
    input.value = "";
    checkInput(input, button);
    expect(button.hidden).toBe(true);
  });

  test("Добавляет первый параграф", () => {
    initApp();
    input.value = "Первый параграф";
    checkInput(input, button);
    expect(button.hidden).toBe(false);

    button.click();

    expect(container.children.length).toBe(1);
    expect(container.firstChild.textContent).toBe("Первый параграф");
    expect(input.value).toBe("");
    expect(button.hidden).toBe(true);
  });

  test("Корректно обрабатывает непрерывное добавление 10+ параграфов", () => {
    initApp();
    for (let i = 1; i <= 12; i++) {
      input.value = `Параграф ${i}`;
      checkInput(input, button);
      button.click();
    }
    expect(container.children.length).toBe(4);
    expect(container.firstChild.textContent).toBe("Параграф 9");
    expect(container.lastChild.textContent).toBe("Параграф 12");
  });

  test("Очищает поле ввода после добавления", () => {
    initApp();
    input.value = "Текст";
    checkInput(input, button);
    expect(button.hidden).toBe(false);

    button.click();

    expect(input.value).toBe("");
    expect(button.hidden).toBe(true);
  });
});

describe("Проверка при инициализации", () => {
  test("При инициализации кнопка скрыта", () => {
    initApp();
    expect(button.hidden).toBe(true);
  });
});
