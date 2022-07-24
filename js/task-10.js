function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function addNumber() {
  return Number(domNamesMap.inputEl.value)
  }

function destroyBoxes() {
  boxShell.innerHTML = ''
}


const domNamesMap = {
  inputEl: document.querySelector('input'),
  buttonCreateEl: document.querySelector('[data-create]'),
  buttonRemoveAllEl: document.querySelector('[data-destroy]'),
  boxShell: document.getElementById('boxes')
}

const { inputEl, buttonCreateEl, buttonRemoveAllEl, boxShell } = domNamesMap;



buttonCreateEl.addEventListener('click',() => createBoxes(addNumber()))
buttonRemoveAllEl.addEventListener('click',() => destroyBoxes())




function createBoxes(amount) {
  
  let counterSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div')
  
    counterSize += 10;

    newBox.style.backgroundColor = `${getRandomHexColor()}`
    newBox.style.width = `${counterSize}px`
    newBox.style.height = `${counterSize}px`
    boxShell.append(newBox)
  } 
}