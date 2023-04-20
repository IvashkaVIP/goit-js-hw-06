const changerFontSize = document.querySelector('#font-size-control');

changerFontSize.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
    const textFontSize = document.querySelector("#text");
    textFontSize.style.fontSize = `${event.currentTarget.value}px`;
}
