const bodyEl = document.querySelector('body')
const buttonStyleOfEl = document.querySelector('.change-color')
const textOfCurrentColor = document.querySelector('.color')



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function onButtonClickChangeColor() {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = `${currentColor}`
  textOfCurrentColor.textContent = currentColor
}




buttonStyleOfEl.addEventListener('click', onButtonClickChangeColor)



