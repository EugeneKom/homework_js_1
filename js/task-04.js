const buttonDecrementEl = document.querySelector('[data-action="decrement"]')
const buttonIncrementEl = document.querySelector('[data-action="increment"]')
const counterEl = document.querySelector('#value')



let counterValue = counterEl.textContent = 0;


buttonIncrementEl.addEventListener('click', () => counterEl.textContent = counterValue += 1)

buttonDecrementEl.addEventListener('click', () => counterEl.textContent = counterValue -= 1)
