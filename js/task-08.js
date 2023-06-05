const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);
function onSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    const data = {
        email: email.value,
        password: password.value,
    }
    if (email.value === "" || password.value === "") {
        alert("All fields are required to be completed!")
    }
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    evt.currentTarget.reset();
}
