

const inputEl = document.querySelector('[id="validation-input"]');

const lengthEL = document.querySelector('[data-length]')


inputEl.addEventListener('blur', (event) => {
    if(event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');

    }
} );
