const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
    return (valueEl.textContent = this.value);
  },
  increment() {
    this.value += 1;
    return (valueEl.textContent = this.value);
  },
};

decrementBtn.addEventListener("click", function () {
  counterValue.decrement();
  console.log(counterValue);
});

incrementBtn.addEventListener("click", function () {
  counterValue.increment();
  console.log(counterValue);
});

console.log(decrementBtn);
console.log(incrementBtn);
