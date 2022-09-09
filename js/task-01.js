//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
//текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).

const list = document.querySelectorAll("li.item");
console.log("Number of categories:", list.length);
//const listTitle = document.querySelectorAll("h2");
list.forEach((title) => {
  console.log(`Category: ${title.querySelector("h2").textContent}
Elements: ${title.querySelectorAll("li").length}`);
});
