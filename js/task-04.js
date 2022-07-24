// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

//  <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div> 
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

//============================================
const actions = document.querySelectorAll('.js-action button');
const valueRef = document.querySelector('#value');
var counterValue = 0;

actions[0].addEventListener("click", () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
});

actions[1].addEventListener("click", () => {
    counterValue += 1;
  valueRef.textContent = counterValue;
});

