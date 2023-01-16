const inputEl = document.querySelector('[id="name-input"]');
const outputEl = document.querySelector('[id="name-output"]')

inputEl.addEventListener('input',(tape) =>{
  outputEl.textContent = tape.currentTarget.value || 'Anonymous';
})

