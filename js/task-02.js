const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

function greateItem(array) {
  return array.map((elem) => {
    const ingredientsItem = document.createElement("li");
    ingredientsItem.classList.add("item");
    ingredientsItem.textContent = elem;
    return ingredientsItem;
  });
}

ingredientsList.append(...greateItem(ingredients));
