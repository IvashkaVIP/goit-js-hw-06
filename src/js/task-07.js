const changerFontSize = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');

changerFontSize.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
  textFontSize.style.fontSize = `${event.currentTarget.value}px`;
}
