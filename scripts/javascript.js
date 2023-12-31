//
// --------- Variables to use for operands --------- //
//
let num1 = '';
let num1String = '';
let num1Set = false;
let num2 = '';
let num2String = '';
let num2Set = false;
let operand = null;
let operandSet = false;
let result = '';
let operationResult = 0;
let computation = '';
let equalPressed = false;


//
// --------- CSS interaction setups --------- //
//
const upperDisplay = document.querySelector('.upper-display');
const lowerDisplay = document.querySelector('.lower-display');

// read in button clicks
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getButtonText);
});

//
// --------- Logic and functions --------- //
//

// Get info from buttons
function getButtonText(e) {
    if (e.target.innerText !== 'Clear') {
        // Equal sign pressed, check if starting from scratch or not
        if (equalPressed) {
            if (e.target.innerText !== '+'
                    && e.target.innerText !== '-'
                    && e.target.innerText !== 'x'
                    && e.target.innerText !== '/'
                    && e.target.innerText !== '=') {
                Clear();
            }
            equalPressed = false;
        }

        // First number
        if (!operandSet && !num1Set) {
            if (e.target.innerText !== '+'
                    && e.target.innerText !== '-'
                    && e.target.innerText !== 'x'
                    && e.target.innerText !== '/') {
                num1String += e.target.innerText;
                computation += e.target.innerText;
                lowerDisplay.textContent = computation;
            }
            else {
                num1 = parseInt(num1String);
                computation += ' ';
                num1Set = true;
            }
        }
        // Second number
        if (num1Set && operandSet && !num2Set) {
            if (e.target.innerText !== '='
                    && e.target.innerText !== '+'
                    && e.target.innerText !== '-'
                    && e.target.innerText !== 'x'
                    && e.target.innerText !== '/') {
                num2String += e.target.innerText;
                computation += e.target.innerText;
                lowerDisplay.textContent = computation;
            }
            else {
                num2 = parseInt(num2String);
                num2Set = true;
            }
        }

        // Operand
        if (!operandSet &&
            (e.target.innerText === '+'
            || e.target.innerText === '-'
            || e.target.innerText === 'x'
            || e.target.innerText === '/')) {
                computation += e.target.innerText + ' ';
                lowerDisplay.textContent = computation;
                operand = e.target.innerText;
                operandSet = true;
        }

        // Call operations
        if (num1Set && num2Set && operandSet) {
            num1 = Operate(num1, num2, operand);
            num2 = '';
            num2String = '';
            num2Set = false;

            if (e.target.innerText === '=') {
                operand = '';
                lowerDisplay.textContent = computation;
                equalPressed = true;
            }
            else if (e.target.innerText !== '=') {
                operand = e.target.innerText;
                computation = num1 + ' ' + operand + ' ';
                lowerDisplay.textContent = computation;
            }
        }
    }
    else {
        // Reset calculator
        Clear();
    }
}

// Math and Operate functions, per assignment guidelines
function Operate(a, b, op) {
    switch (op) {
        case '+':
            Add(a, b);
            break;
        case '-':
            Subtract(a, b);
            break;
        case 'x':
            Multiply(a, b);
            break;
        case '/':
            Divide(a, b);
            break;
        default:
            break;
    }
    upperDisplay.textContent = result;
    return result;
}

function Clear() {
    upperDisplay.textContent = '0';
    lowerDisplay.textContent = '0';
    num1 = '';
    num1String = '';
    num1Set = false;
    num2 = '';
    num2String = '';
    num2Set = false;
    operand = null;
    operandSet = false;
    result = '';
    computation = '';
}

function Add(a, b) {
    result = a + b;
    return result;
}

function Subtract(a, b) {
    result = a - b;
    return result;
}

function Multiply(a, b) {
    result = a * b;
    return result;
}

function Divide(a, b) {
    result = a / b;
    return result;
}