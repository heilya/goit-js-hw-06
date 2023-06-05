function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createButton = document.querySelector('button[data-create]');
const deleteButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('#controls > input');
const boxes = document.querySelector("#boxes");
createButton.addEventListener('click', createBoxes);
deleteButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const userQuantity = input.value;
  let size = 30;
  const arrayBoxes = [];
  for (let i = 1; i <= Number(userQuantity); i += 1) {
    const colorBoxes = getRandomHexColor();
    const box = document.createElement('div');
    size += 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = `${colorBoxes}`;
    box.style.marginTop = "10px";
    arrayBoxes.push(box);
  }
  boxes.append(...arrayBoxes)
}
function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";

}