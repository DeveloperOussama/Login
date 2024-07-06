document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const eyeToggle = document.querySelector('.tPassword');

    eyeToggle.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '☢️';
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        validateInputs();
    });

    const setError = function (element, message) {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }

    const setSuccess = function (element) {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const isValidEmail = function (email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateInputs = function () {
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if (emailValue === '') {
            setError(email, '');
        } else if (!isValidEmail(emailValue)) {
            setError(email, '');
        } else {
            setSuccess(email);
        }

        if (passwordValue === '') {
            setError(password, '');
        } else if (passwordValue.length < 8) {
            setError(password, '');
        } else {
            setSuccess(password);
        }
    };
});