const form = document.querySelector('form');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
})

const validateInput = () => {
    const userNamevalue = userName.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2 = password2.value.trim();
}