function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const container = document.querySelector(".widget");
const nameColor = document.querySelector(".color");
const colorButton = document.querySelector(".change-color");
colorButton.addEventListener("click", onClick);
function onClick(event) {
  container.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = container.style.backgroundColor;
}

