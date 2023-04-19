
const sizeControl = document.getElementById('font-size-control')
const sizeText = document.getElementById('text')

sizeControl.addEventListener('input', onChange)
sizeText.style.fontSize = `${sizeControl.value}px`

function onChange() {
 sizeText.style.fontSize = `${event.currentTarget.value}px`;
}

