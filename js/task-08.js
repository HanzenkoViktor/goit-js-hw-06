const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }

  const logginData = {};
  for (const key of new FormData(event.currentTarget).keys()) {
    logginData[key] = key;
  }
  console.log(logginData);
  event.currentTarget.reset();
}
