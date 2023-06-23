const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value:document.querySelector('#value')
}
refs.decrementBtn.addEventListener('click', onDecrementButtonClick);
refs.incrementBtn.addEventListener('click', onIncrementButtonClick);

let counterValue =0;
function onIncrementButtonClick() {
    counterValue += 1;
    refs.value.textContent = counterValue;
}
function onDecrementButtonClick() {
    counterValue -= 1;
     refs.value.textContent = counterValue;
}