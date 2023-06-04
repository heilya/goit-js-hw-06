const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
const creatList = ingredients.map(element => {
  const ingredientsListItem = document.createElement("li");
  ingredientsListItem.textContent = element;
  ingredientsListItem.classList.add("item");
  ingredientsList.append(ingredientsListItem);
})