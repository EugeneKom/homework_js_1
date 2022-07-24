const categoryEl = document.querySelector('#categories')
const allCategoriesEl = document.querySelectorAll('.item')


console.log(`Numbers of categories : ${categoryEl.children.length}`)


allCategoriesEl.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`)
    console.log(`Elements: ${el.lastElementChild.children.length}`)
})

