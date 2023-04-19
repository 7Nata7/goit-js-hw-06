let counterValue = 0
const newValue = document.getElementById('value') 
const minus = document.querySelector('[data-action = "decrement"]')
const plus = document.querySelector('[data-action = "increment"]')

minus.addEventListener('click', () => {
  counterValue = counterValue - 1
  newValue.textContent = counterValue
})

plus.addEventListener('click', () => {
  counterValue = counterValue + 1
newValue.textContent = counterValue
})







