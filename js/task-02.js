const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')


function creatElement (arr) {

  const newItemEl = []

  arr.forEach(newElement => {
    const listItem = document.createElement('li')
    listItem.textContent = newElement
    listItem.classList.add('item')
    newItemEl.push(listItem)
  });

  ingredientsEl.append(...newItemEl)

}


creatElement(ingredients);