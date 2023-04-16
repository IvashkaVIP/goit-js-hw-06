const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const arrayItemEl = ingredients.map(item => {
//   const ingredientsEl = document.createElement("li");
//   ingredientsEl.textContent = item;
//   ingredientsEl.classList.add("item");

//   return ingredientsEl;
// });

// const ingredientsListEl = document.querySelector('ul#ingredients');
// ingredientsListEl.append(...arrayItemEl);

 
const makeIngredientsList = options => {
  return options.map(item => {
    const ingredientsEl = document.createElement("li");
    ingredientsEl.textContent = item;
    ingredientsEl.classList.add("item");

    return ingredientsEl;
  });
};

const ingredientsContainerEl = document.querySelector('ul#ingredients');
 
const ingredientListEl = makeIngredientsList(ingredients);
 ingredientsContainerEl.append(...ingredientListEl);