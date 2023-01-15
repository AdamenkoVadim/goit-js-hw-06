const categoriesEl = document.querySelectorAll('li.item');
console.log(categoriesEl);
console.log(`Number of categories: ${categoriesEl.length}`);

const ul = [];

for (const count of categoriesEl) {
    console.log(count);
    console.log('H',count.firstElementChild.textContent);
    console.log('UL',count.lastElementChild);
    ul.push(count.firstElementChild.textContent);

}


const nameCtegory = categoriesEl.forEach(name =>{
    console.log(name.firstElementChild.textContent);
    console.log(name.lastElementChild.textContent);
})


