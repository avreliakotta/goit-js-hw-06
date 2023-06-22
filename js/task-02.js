const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liArr = ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = `${ingredient}`;

    return itemEl;
});
const ingredientsContainer = document.querySelector('#ingredients');
ingredientsContainer.append(...liArr);