//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка "Anonymous".

//<input type="text" id="name-input" placeholder="Please enter your name" />
//<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// Этапы решения.
//Получаем ссылку на элемент
const refs = {
  input: document.querySelector("#name-input"),
  name: document.querySelector("#name-output"),
};
//Добавляем слушателя события
refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.name.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    refs.name.textContent = "Anonymous";
  }
}
