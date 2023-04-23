let counterValue = 0;

const counterDisplay = document.querySelector("#value");
const clickDecrementBtn = document.querySelector(
  '[data-action="decrement"]'
);
const clickIncrementBtn = document.querySelector(
  '[data-action="increment"]'
);

clickDecrementBtn.addEventListener("click", () => {
  counterValue--;
  counterDisplay.textContent = counterValue;
});

clickIncrementBtn.addEventListener("click", () => {
  counterValue++;
  counterDisplay.textContent = counterValue;
});
