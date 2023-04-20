const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeIngredientsList = (options) => {
  return options.map((item) => {
    const ingredientsEl = document.createElement("li");
    ingredientsEl.textContent = item;
    ingredientsEl.classList.add("item");

    return ingredientsEl;
  });
};

const ingredientsContainerEl = document.querySelector("#ingredients");

const ingredientListEl = makeIngredientsList(ingredients);
ingredientsContainerEl.append(...ingredientListEl);
