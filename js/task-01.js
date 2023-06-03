const listCategories = document.querySelector("#categories");
console.log(`Number of categories: ${[...listCategories.children].length}`);
[...listCategories.children].forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${[...item.lastElementChild.children].length}`)
});









