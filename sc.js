function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}
// setFormMessage(loginForm, 'success', "You're logged in!");

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#1234");
    const createAccountForm = document.querySelector("#createAccount");
    document.querySelector('#linkCreateAccount').addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.add("form__hidden");
        createAccountForm.classList.remove('form__hidden')
    })

    document.querySelector('#linkLogIn').addEventListener('click', e => {
        e.preventDefault();
        createAccountForm.classList.add("form__hidden");
        loginForm.classList.remove('form__hidden')
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

});

function styleInputs(input) {
    let elems = document.querySelectorAll(input);
    let index = 0, length = elems.length;
    for ( ; index < length; index++) {
        elems[index].style.transition = "opacity 0.5s linear 0s";
        elems[index].style.opacity = 0.5;
    }
}