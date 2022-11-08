const refs = {
  input: document.querySelector("#name-input"),
  spam: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.spam.textContent = event.currentTarget.value;
}
