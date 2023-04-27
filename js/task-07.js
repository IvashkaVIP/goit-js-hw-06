const changerFontSize = document.querySelector("#font-size-control");
changerFontSize.addEventListener("input", onChangeFontSize);

const textFontSize = document.querySelector("#text");
textFontSize.style.fontSize = `${changerFontSize.value}px`;

function onChangeFontSize(event) {
  textFontSize.style.fontSize = `${event.currentTarget.value}px`;
}
