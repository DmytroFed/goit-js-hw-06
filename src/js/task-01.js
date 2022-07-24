
const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

// // Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
//  и количество элементов в категории(всех вложенных в него < li >).

// Category: Animals
// Elements: 4



// Variant 01 ============================
const categoriesArray = [...totalCategories]
    .map(categories =>
        `Category: ${categories.children[0].textContent}
         Elements: ${categories.children[1].children.length}`
  )
  .join("\n");   //separated by a newline
console.log(categoriesArray);

// Variant 02 ============================




