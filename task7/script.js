//1 Проверка ввода
function checkInput(inputElement, buttonElement) {
  if (inputElement.value.trim() !== '') {
    buttonElement.hidden = false;
  }else{
    buttonElement.hidden = true;
  }
}

//2 Логика добавления <p>
function initApp() {
  const myinp = document.querySelector('.myi');
  const mybut = document.querySelector('.myb');
  const p = document.querySelector('.pOut');

  checkInput(myinp, mybut);

  mybut.addEventListener('click', () => {
      if (p.children.length < 4) {
          const np = document.createElement('p');
          np.innerText = myinp.value;
          p.append(np);
      } else {
          p.removeChild(p.firstChild);
          const np = document.createElement('p');
          np.innerText = myinp.value;
          p.append(np);
      }
      
      // Очищаем поле и обновляем кнопку
      myinp.value = '';
      checkInput(myinp, mybut);
  });
}

// Экспортируем для тестов
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { checkInput, initApp }
}
