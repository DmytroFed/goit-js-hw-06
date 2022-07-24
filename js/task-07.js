// Задание 7
// Напиши скрипт, который реагирует на изменение 
// значения input#font - size - control(событие input) 
// и изменяет инлайн - стиль span#text обновляя 
// свойство font - size.В результате при перетаскивании 
// ползунка будет меняться размер текста.

const inputChange = document.getElementById('font-size-control');
const pChange = document.getElementById('text'); 

inputChange.addEventListener('input', onSizeChanged)

function onSizeChanged(event) {
  pChange.style.fontSize = `${event.currentTarget.value +'px'}`;
}

//Вариант 2
// function onSizeChanged(event) {
//   pChange.style.fontSize = `${event.currentTarget.value}px`;
// }