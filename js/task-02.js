
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createListItem = function (itemText) {
  const ingredientsEl = document.createElement('li');// Создаст отдельный элемент <li>.
  ingredientsEl.classList.add('item');// Добавит элементу класс item.
  ingredientsEl.textContent = itemText;// Добавит название ингредиента как его текстовое содержимое.
  return ingredientsEl;
};

const listIngr = ingredients.map(createListItem); //map(callback) используется для трансформации массива
document.getElementById('ingredients').append(...listIngr); //Возвращает ссылку на элемент по его идентификатору (ID);
                                      // .append = добавляет элемент(ы) после всех детей элемента element.

