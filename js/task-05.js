const inputEl = document.querySelector('[id="name-input"]');
const outputEl = document.querySelector('[id="name-output"]')

inputEl.addEventListener('input',(event) =>{
  outputEl.textContent = event.currentTarget.value || 'Anonymous';
})

