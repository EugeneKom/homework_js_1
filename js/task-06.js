const inputEl = document.getElementById('validation-input')

const valueOfValidation = +inputEl.dataset.length

console.log(valueOfValidation)

const onInputFocusOff = (input) => {
    if (input.value.length === valueOfValidation) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
    else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}


inputEl.addEventListener('blur',() => onInputFocusOff(inputEl))

