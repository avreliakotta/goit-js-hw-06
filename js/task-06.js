const input = document.querySelector('#validation-input');
console.dir(input);
 input.addEventListener('blur', onInputBlur);
    function onInputBlur(event) {
   if (event.currentTarget.value.length === Number(input.dataset.length )) {
        input.classList.add('valid');
         input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
        }
    }