const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", inputCurrentName);

function inputCurrentName(event) {
  if (event.currentTarget.value.trim())
    outputName.textContent = event.currentTarget.value.trim();
  else outputName.textContent = "Anonymous";
}
