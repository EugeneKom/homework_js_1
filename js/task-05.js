const inputEl = document.getElementById('name-input')
const outputEl = document.getElementById('name-output')



inputEl.addEventListener('input', (key)=> {
    
    outputEl.textContent = key.currentTarget.value;

    if (inputEl.value.length === 0 || inputEl.value === '') {
        outputEl.textContent = 'Anonymous'
    }
})


