const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayItemEl = ingredients.map(item => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.textContent = item;
  ingredientsEl.classList.add("item");

  return ingredientsEl;
});

const ingredientsListEl = document.querySelector('ul#ingredients');
ingredientsListEl.append(...arrayItemEl);

