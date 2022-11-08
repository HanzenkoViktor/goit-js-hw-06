const inputEl = document.querySelector("#validation-input");

const symbols = Number(inputEl.dataset.length);
console.log("🚀 ~ file: task-06.js ~ line 4 ~ symbols", symbols);

inputEl.addEventListener("blur", jnInputBlur);

function jnInputBlur(event) {
  if (event.currentTarget.value.length === symbols) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
