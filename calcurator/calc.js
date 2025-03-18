document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttonsContainer = document.getElementById('buttons');
    let currentExpression = '';

    const buttonValues = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

    buttonValues.forEach(value => {
        const btn = document.createElement('button');
        btn.textContent = value;
        btn.className = 'calc-button';
        
        if (value === '=') {
            btn.classList.add('equals');
        } else if (['/', '*', '-', '+'].includes(value)) {
            btn.classList.add('operator');
        } else if (value === 'C') {
            btn.classList.add('clear');
        } else {
            btn.classList.add('number');
        }

        btn.addEventListener('click', () => {
            if (value === '=') {
                try {
                    const result = eval(currentExpression);
                    display.textContent = Number.isInteger(result) ? result : result.toFixed(2);
                    currentExpression = display.textContent;
                } catch (error) {
                    display.textContent = 'Error';
                    currentExpression = '';
                }
            } else if (value === 'C') {
                display.textContent = '';
                currentExpression = '';
            } else {
                currentExpression += value;
                display.textContent = currentExpression;
            }
        });

        buttonsContainer.appendChild(btn);
    });
});
