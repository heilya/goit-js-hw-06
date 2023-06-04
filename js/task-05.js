const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
input.addEventListener("input", (event) => {
    userName.textContent = event.target.value.trim();
    if (event.target.value.trim() === "") {
        userName.textContent = "Anonymous";
    }
})