// Password Validation

const passwordOne = document.getElementById('password');
const passwordTwo = document.getElementById('confirm-password');
const error = document.getElementById('error');
const submit = document.getElementById('submit');

passwordTwo.addEventListener('input', function(e) {
    passValidate();
});

function passValidate() {
    if (passwordTwo.value === passwordOne.value) {
        error.textContent = '';
        passwordOne.classList.remove('invalid');
        passwordTwo.classList.remove('invalid');
    } else {
        error.textContent = "*Passwords do not match"
        passwordOne.className = 'invalid';
        passwordTwo.className = 'invalid';
        submit.preventDefault();
        form.validity = false;
    }
};

const form = document.getElementById('sign-up');

form.addEventListener('submit', (e) => {
    if(passwordTwo.className == 'invalid' || passwordTwo == '') {
        e.preventDefault();
    } else {
        alert("42");
    }
});
