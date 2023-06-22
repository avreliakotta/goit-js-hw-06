function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const resetBtn = document.querySelector('[data-destroy]');
createBtn.addEventListener('click',createBox);
const input = document.querySelector('input');
resetBtn.addEventListener('click', destroyBoxes);
const container = document.querySelector('#boxes');
input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  createBox(event.currentTarget.value);
}
function createBox(amount) {
  
  const firstWidth = 30;
  const firstHeight = 30;
  const arr = [];
  for (let i = 0; i <amount; i += 1){
    const width = firstWidth + i * 10;
    const heigth = firstHeight + i * 10;
    const divEl = document.createElement('div');

    divEl.style.width = `${width}px`;
    divEl.style.height = `${heigth}px`;
    divEl.style.backgroundColor = getRandomHexColor();

  
    console.log(divEl);
    arr.push(divEl);
  
    
  }
   container.append(...arr);
}

function destroyBoxes() {
  
  container.innerHTML = '';
  input.innerHTML = '';
}

