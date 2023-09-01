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
let computation = '';


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
    else if (num1Set && operandSet && !num2Set) {
        if (e.target.innerText !== '=') {
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
    if (e.target.innerText === '=') {
        switch (operand) {
            case '+':
                console.log("Result: " + Add(num1, num2));
                break;
            case '-':
                console.log(Subtract(num1, num2));
                break;
            case 'x':
                console.log(Multiply(num1, num2));
                break;
            case '/':
                console.log(Divide(num1, num2));
                break;
            default:
                break;
        }
        upperDisplay.textContent = result;
    }
}

// Math functions, per assignment guidelines
function Add(a, b) {
    console.log("In addition");
    result = a + b;
    return result;
}

function Subtract(a, b) {
    console.log("In subtraction");
    result = a - b;
    return result;
}

function Multiply(a, b) {
    console.log("In Multiplication");
    result = a * b;
    return result;
}

function Divide(a, b) {
    console.log("In Division");
    result = a / b;
    return result;
}
