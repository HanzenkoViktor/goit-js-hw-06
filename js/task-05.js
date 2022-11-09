const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const calbackInput = (event) => {
  textOutput.textContent =
    textInput.value.length !== 0 ? event.currentTarget.value : "Anonymous";
};

textInput.addEventListener("input", calbackInput);
