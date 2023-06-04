const input = document.querySelector("#validation-input");
input.addEventListener("blur", (element) => {
    if (element.target.value.trim().length === 6) {
        input.classList.add("valid");
        if (input.classList.contains("invalid")) {
            input.classList.replace("invalid", "valid");
        }
    } else {
        input.classList.add("invalid");
        if (input.classList.contains("valid")) {
            input.classList.replace("valid", "invalid");
        }
    } 
    if (element.target.value.trim() === "" && input.classList.contains("invalid")) {
        input.classList.remove("invalid");
    }
})

