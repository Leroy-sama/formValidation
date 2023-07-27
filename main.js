const form = document.querySelector('form');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const errorMsg = document.querySelector('.error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("default prevented");
    validateInput();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove(error);
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInput = () => {
    const userNamevalue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2value = password2.value.trim();


    if (userNamevalue === '') {
        setError(userName, 'username is required');
    } else {
        setSuccess(userName);
    }

    if (emailValue === '') {
        setError(email, 'email is required');
    } else if (!isValidEmail(email)) {
        setError(email, "email is invalid");
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'password is required');
    } else if (passwordValue < 8) {
        setError(password, 'password is too short');
    } else {
        setSuccess(email);
    }

    if (password2value === '') {
        setError(password2, 'confirming password is required');
    } else if (password2value !== passwordValue) {
        setError(password2, 'password is not the same');
    } else {
        setSuccess(password2);
    }
}