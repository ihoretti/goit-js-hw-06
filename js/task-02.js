//Напиши скрипт, который для каждого элемента массива ingredients:
//Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul#ingredients.

const list = document.querySelector("ul");
console.log(list);

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//Перебираем массив методом map()
//добовляем класс item
//название ингредиента как его текстовое содержимое
const markup = (ingredients) => {
  return ingredients.map((ingredient) => {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = `${ingredient}`;
    return listItem;
  });
};
//вставляем все <li> за одну операцию в список ul#ingredients
const ingredientsList = markup(ingredients);
list.append(...ingredientsList);
