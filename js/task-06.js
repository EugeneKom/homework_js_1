const inputEl = document.getElementById('validation-input')

const valueOfValidation = inputEl.getAttribute('data-length')

const onInputFocusOff = (input) => {
    if (input.value.length >= valueOfValidation) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
    else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}


inputEl.addEventListener('blur',() => onInputFocusOff(inputEl))

