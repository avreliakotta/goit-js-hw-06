 const categories = document.querySelector('#categories');
// console.log(categories);
const itemsEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemsEl.length);
itemsEl.forEach(element => {
    // console.dir(element.lastElementChild.children.length);
    console.log('Category:',element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
});