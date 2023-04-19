const nameInput = document.querySelector("#name-input")
const nameOutput = document.querySelector("#name-output")

nameInput.addEventListener("input", () => {
 nameInput.value === '' ? nameOutput.textContent = "Anonymus" : nameOutput.textContent = nameInput.value
})