const mainForm = document.querySelector('.login-form')

mainForm.addEventListener("submit", onSubmit)

function onSubmit(event) {
event.preventDefault()
const email = mainForm.elements.email.value
const password = mainForm.elements.password.value

if (email === "" || password === "") {
 const message = "Всі поля повинні бути заповнені"
 alert(message)
} else {
 const dataForm = {
  email: email,
  password: password
 }
console.log(dataForm)
mainForm.reset()
}
}






