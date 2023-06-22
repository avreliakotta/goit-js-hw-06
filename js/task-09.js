function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body;
const buttonEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
buttonEl.addEventListener('click', onButtonClick);
function onButtonClick(event) {
 textEl.style.color=getRandomHexColor();
 }

