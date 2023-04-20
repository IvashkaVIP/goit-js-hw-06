let counterValue = 0;
                            
const counterDisplay = document.querySelector('#value');
const clickDecrementBtn = document.querySelector('button[data-action="decrement"]');
const clickIncrementBtn = document.querySelector(
  'button[data-action="increment"]'
);

clickDecrementBtn.addEventListener("click", () => {
  counterValue--;
  counterDisplay.textContent = counterValue;
});

clickIncrementBtn.addEventListener("click", () => {
  counterValue++;
  counterDisplay.textContent = counterValue;
});






