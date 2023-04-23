function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", onChangeColorBtn);

function onChangeColorBtn() {
  const textColor = document.querySelector(".color");
  const randomColor = getRandomHexColor();
  textColor.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
  textColor.textContent = document.body.getAttribute(backgroundColor);
}
