const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const getEl = document.getElementById('ingredients');
console.log(getEl);

for (const name  of ingredients) {
  const liElem = document.createElement('li');
  liElem.textContent = name;
  getEl.appendChild(liElem);
}

