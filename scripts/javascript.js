// Variables to use for operands
let num1 = null;
let num2 = null;
let result = null;
let operand = null;

// read in button clicks
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getButtonText);
});

// function to get info from buttons
function getButtonText(e) {
    // console.log(e.target.innerText);

    // If operand is null, then we haven't set num1 yet
    if (operand === null && num1 === null) {
        num1 = parseInt(e.target.innerText);
        // console.log(num1);
        // console.log(num2);
        // console.log(operand);
    }
    else if (num1 !== null && operand !== null && num2 === null) {
        num2 = parseInt(e.target.innerText);
        // console.log(num1);
        // console.log(num2);
        // console.log(operand);
    }

    if (operand === null &&
        (e.target.innerText === '+'
        || e.target.innerText === '-'
        || e.target.innerText === 'x'
        || e.target.innerText === '/')) {
            operand = e.target.innerText;
            // console.log(num1);
            // console.log(num2);
            // console.log(operand);
        }

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
    }
}

// Math functions, per assignment guidelines
function Add(a, b) {
    console.log("In addition");
    // console.log(a);
    // console.log(b);
    // console.log(operand);
    return a + b;
}

function Subtract(a, b) {
    console.log("In subtraction");
    // console.log(a);
    // console.log(b);
    // console.log(operand);
    return a - b;
}

function Multiply(a, b) {
    console.log("In Multiplication");
    // console.log(a);
    // console.log(b);
    // console.log(operand);
    return a * b;
}

function Divide(a, b) {
    console.log("In Division");
    // console.log(a);
    // console.log(b);
    // console.log(operand);
    return a / b;
}
