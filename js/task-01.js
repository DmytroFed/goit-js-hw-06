const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

// Variant 01  forEach ============================

const category = (array) => {
  array.forEach((element) => {
    const title = element.querySelector("h2");
    const message = `Category: ${title.textContent}. Elements: ${element.children[1].children.length}.`;
    console.log(message);
  });
};
category(totalCategories);

// Variant 02 .map   ============================
// const categoriesArray = [...totalCategories]
//     .map(categories =>
//         `Category: ${categories.children[0].textContent}
//          Elements: ${categories.children[1].children.length}`
//   )
//   .join("\n");   //separated by a newline
// console.log(categoriesArray);


