const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('[id="value"]');

const counter = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};

decrementBtn.addEventListener('click',() => {
    counter.decrement();
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', () => {
    counter.increment();
    valueEl.textContent = counter.value;
});

