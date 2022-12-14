//Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//проверяет его содержимое на правильное количество введённых символов.

//<input
// type="text"
//id="validation-input"
//data-length="6"
//placeholder="Please enter 6 symbols"/>

//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество символов, то border инпута становится зелёным,
//если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid,
//которые мы уже добавили в исходные файлы задания.

const inputTxt = document.querySelector("#validation-input");

inputTxt.addEventListener("blur", validation);

const txtLength = +inputTxt.dataset.length;

function validation(event) {
  if (event.currentTarget.value.length === txtLength) {
    inputTxt.classList.add("valid");
    inputTxt.classList.remove("invalid");
  } else {
    inputTxt.classList.add("invalid");
    inputTxt.classList.remove("valid");
  }
}
