// Посчитать и вывести в консоль количество
// категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
// найти и вывести в консоль текст заголовка элемента (тега <h2>)
// и количество элементов в категории (всех вложенных в него <li>).

/* Результат:
    Number of categories: 3

    Category: Animals
    Elements: 4

    Category: Products
    Elements: 3

    Category: Technologies
    Elements: 5
*/

class CategoryList {
  #listRef;

  constructor(id) {
    this.#listRef = document.getElementById(id);
  }

  get length() {
    // 1 variant
    return this.#listRef.childElementCount;

    // 2 variant
    // return this.#listRef.querySelectorAll('.item').length;
  }

  get categoriesInfo() {
    const listOfRefsCategories = this.#listRef.children;
    return [...listOfRefsCategories].map((el) => {
      return {
        categoryName: el.firstElementChild.textContent,
        categoryListItems: [...el.querySelector('ul').children].map((item) => item.textContent),
        categoryListLength: el.querySelector('ul').childElementCount,
      };
    });
  }

  toString() {
    let result = `Number of categories: ${this.length}\n\n`;
    this.categoriesInfo.forEach(element => {
        result += `Category: ${element.categoryName}\nElements:${element.categoryListLength}\n\n`;
    });
    return result;
  }
}

const k = new CategoryList('categories');
console.log(k.toString());

