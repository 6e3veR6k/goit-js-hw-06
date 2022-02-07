/*
Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>.
Обзательно используй метод document.createElement().

Добавит название ингредиента как его текстовое содержимое.

Добавит элементу класс item.

После чего вставит все <li> за одну операцию в список ul.ingredients.

*/

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const createListItem = function (itemText) {
  const liRef = document.createElement('li');
  liRef.textContent = itemText;
  liRef.classList.add('item');
  return liRef;
};

const listRef = ingredients.map(createListItem);

document.getElementById('ingredients').append(...listRef);
