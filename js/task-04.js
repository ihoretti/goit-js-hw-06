//Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
//Создай переменную counterValue в которой будет храниться текущее значение счетчика и
//инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной

const counter = document.querySelector("#value");

const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

function decValue() {
  counterValue -= 1;
  return (counter.textContent = counterValue);
}
function incValue() {
  counterValue += 1;
  return (counter.textContent = counterValue);
}

decBtn.addEventListener("click", decValue);
incBtn.addEventListener("click", incValue);
