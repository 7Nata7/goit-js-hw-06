const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

const ingredientsListItems = [];

ingredients.forEach(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item')
  ingredientsItem.textContent = ingredient;
  ingredientsListItems.push(ingredientsItem);
});

ingredientsList.append(...ingredientsListItems);

  
