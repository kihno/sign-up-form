// Password Validation

const passwordOne = document.getElementById('password');
const passwordTwo = document.getElementById('confirm-password');
const error = document.getElementById('error');

passwordTwo.addEventListener('input', function(e) {
    if (passwordTwo.value === passwordOne.value) {
        error.textContent = '';
        passwordOne.classList.remove('invalid');
        passwordTwo.classList.remove('invalid');
    } else {
        error.textContent = "*Passwords do not match"
        passwordOne.className = 'invalid';
        passwordTwo.className = 'invalid';
    }
});
