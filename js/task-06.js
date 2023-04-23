const inputText = document.querySelector("#validation-input");
inputText.addEventListener("blur", inputValidation);

function inputValidation() {
  // if (inputText.value.trim().length != inputText.dataset.length) {
  if (inputText.value.trim().length != Number.parseInt(inputText.getAttribute('data-length')))
 {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  } else {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  }
}
