const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const getEl = document.getElementById('ingredients');

for (const name  of ingredients) {
  const liElem = document.createElement('li');
  liElem.textContent = name;
  liElem.classList.add('item');
  getEl.appendChild(liElem);
  
}