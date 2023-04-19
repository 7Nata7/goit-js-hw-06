const sizeControl = document.getElementById('font-size-control')
const sizeText = document.getElementById('text')

sizeControl.addEventListener('input', onChange)

function onChange() {
 sizeText.style.fontSize = `${sizeControl.value}px`
}

