function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.body;
const pSpan = document.querySelector('.color');
const changeBtn = document.querySelector('.change-color');

// Добавляем слушателя события на элемент
changeBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  const randomHexValue = getRandomHexColor();
  pSpan.textContent = randomHexValue;
  bodyRef.style.backgroundColor = randomHexValue;
}

