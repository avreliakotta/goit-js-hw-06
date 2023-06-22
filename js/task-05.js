const refs={
  input:document.querySelector('#name-input'),
  nameOutput:document.querySelector('#name-output'),
}
refs.input.addEventListener('input',onNameOutputChange);
function onNameOutputChange(event) {
    if (event.currentTarget.value==='') {
        refs.nameOutput.textContent = 'Anonymous'
    } else {
        refs.nameOutput.textContent = event.currentTarget.value;
    }
}