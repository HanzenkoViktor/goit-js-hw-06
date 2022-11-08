const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientsEl = ingredients.length;

for (let index = 0; index < ingredients.length; index += 1) {
  const ingredient = document.createElement("li");
  ingredient.textContent = ingredients[index];
  ingredient.classList = "item";
  ingredientsList.append(ingredient);
  console.log(ingredientsList);
  console.log(ingredient);
}
