function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('.change-color')
const colorSpan = document.querySelector('.color')
const body = document.body

changeBtn.addEventListener('click', () => {

  // !Variant 1
const color = getRandomHexColor()
body.style.backgroundColor = color
colorSpan.textContent = color

  // !Variant 2
// body.style.backgroundColor = getRandomHexColor()
// colorSpan.textContent = getRandomHexColor()
}
)
