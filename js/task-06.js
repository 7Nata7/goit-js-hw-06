const inputValue = document.getElementById('validation-input');
const requiredLength = inputValue.getAttribute('data-length');

function checkInputLength() {
  const newLength = inputValue.value.length;
  if (newLength === Number(requiredLength)) {
    inputValue.classList.add('valid');
    inputValue.classList.remove('invalid');
  } else {
    inputValue.classList.add('invalid');
    inputValue.classList.remove('valid');
  }
}

inputValue.addEventListener('blur', checkInputLength);

