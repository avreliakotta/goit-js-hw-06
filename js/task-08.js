const form = document.querySelector('.login-form');
 console.dir(form);
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget.elements;
    const mail = formEl.email.value;
        const password = formEl.password.value;
    let formData = { mail, password };
    if (mail && password !== "") {
        console.log(formData)
    } else {
        alert("Заповніть,будь ласка, всі поля");
    }
     form.reset();    
        }
     
