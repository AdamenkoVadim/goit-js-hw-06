function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorSpan = document.querySelector('.color');

changeBtn.addEventListener('click', () => {
  const random = getRandomHexColor();
  bodyEl.style.backgroundColor = random;
  colorSpan.textContent = random;
  console.log(random);
})
