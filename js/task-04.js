let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
buttonDecrement.addEventListener("click", () => {
    value.textContent = counterValue;
    counterValue -= 1;   
});
buttonIncrement.addEventListener("click", () => {
    value.textContent = counterValue;
    counterValue += 1;   
});