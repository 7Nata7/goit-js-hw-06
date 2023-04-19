function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('.change-color')
const colorSpan = document.querySelector('.color')
const body = document.body

changeBtn.addEventListener('click', () => {

const color = getRandomHexColor()
body.style.backgroundColor = getRandomHexColor()
colorSpan.textContent = color
}
)

