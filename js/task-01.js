
const categories = document.querySelectorAll('#categories h2');
console.log(`Number of categories: ${categories.length}`)

categories.forEach(function (category) {
 const categoryName = category.textContent;
 const categoryElements = category.nextElementSibling.children.length;
 console.log(`Category: ${categoryName}`);
 console.log(`Elements: ${categoryElements}`);
});