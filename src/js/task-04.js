let counterValue = 0;
                            
const counterDisplay = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    counterValue--;
    counterDisplay.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue++;
  counterDisplay.textContent = counterValue;
});






