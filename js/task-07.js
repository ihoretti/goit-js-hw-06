//Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и
//изменяет инлайн - стиль span#text обновляя свойство font - size.
//В результате при перетаскивании ползунка будет меняться размер текста.

//<input id="font-size-control" type="range" min="16" max="96" />
//<br />
//<span id="text">Abracadabra!</span>

const inputSize = document.querySelector("#font-size-control");
const txtSize = document.querySelector("#text");
txtSize.classList.add("text");
inputSize.addEventListener("input", fontSizeSet);
//console.log(inputSize);
//console.log(txtSize);
function fontSizeSet(event) {
  //console.log(event.currentTarget.value);
  txtSize.style.fontSize = `${event.currentTarget.value}px`;
}
