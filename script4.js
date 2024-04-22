const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const clear = document.querySelector('.clear');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if (button.textContent === 'C') {
            display.value = '';
        } else if(button.textContent === '\u2190') {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += button.textContent;
        }
    });
});
