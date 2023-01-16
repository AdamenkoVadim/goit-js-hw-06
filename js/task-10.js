function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const amount = document.querySelector('input');
const boxes = document.querySelector('[id="boxes"]');

createBtn.addEventListener('click',()=>{
  boxes.innerHTML = '';
  const boxSize = 30;
  for (let i = 0; i < amount.value; i++) {
    const num = boxSize + i * 10;
    console.log(i);
    const divEl = document.createElement('div');
    divEl.style.cssText =`width: ${num}px;
    height: ${num}px;
    background-color: ${getRandomHexColor()};`
    boxes.appendChild(divEl);
  }
});

destroyBtn.addEventListener('click',destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
}
  

