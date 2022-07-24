const bodyEl = document.querySelector('body')
const buttonStyleOfEl = document.querySelector('.change-color')
const textOfCurrentColor = document.querySelector('.color')



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function onButtonClickChangeColor() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`
  textOfCurrentColor.textContent = getRandomHexColor()
}




buttonStyleOfEl.addEventListener('click', onButtonClickChangeColor)



