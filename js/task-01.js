const listCategories = document.querySelector("#categories");
const categories = Number([...listCategories.children].length);
console.log(`Number of categories:`, categories);
[...listCategories.children].forEach(item => {
    const category = item.firstElementChild.textContent;
    const elements = Number([...item.lastElementChild.children].length);
    console.log(`Category:`, category);
    console.log(`Elements:`, elements);
});








