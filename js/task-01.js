const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesEl.length}`);
console.log('');

const categories = categoriesEl.forEach(name => {
    console.log(`Category: ${name.firstElementChild.textContent}`);
    console.log(`Elements: ${name.children[1].children.length}`);
    console.log('');
    });

