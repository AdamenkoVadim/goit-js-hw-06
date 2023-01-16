const inputEl = document.querySelector('[id="font-size-control"]');
const outputEl = document.querySelector('[id="text"]');

inputEl.addEventListener('input', () => {
    outputEl.style.fontSize = inputEl.value + 'px';
})

