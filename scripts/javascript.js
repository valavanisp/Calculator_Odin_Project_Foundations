// Variables to use for operands
let num1 = null;
let num2 = null;
let result = null;
let computation = '';
let operand = null;

// CSS Display sections
const upperDisplay = document.querySelector('.upper-display');
const lowerDisplay = document.querySelector('.lower-display');

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

        computation += e.target.innerText + ' ';
        lowerDisplay.textContent = computation;


        num1 = parseInt(e.target.innerText);
        // console.log(num1);
        // console.log(num2);
        // console.log(operand);
    }
    else if (num1 !== null && operand !== null && num2 === null) {

        computation += e.target.innerText + ' ';
        lowerDisplay.textContent = computation;


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

            computation += e.target.innerText + ' ';
        lowerDisplay.textContent = computation;

        
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
        upperDisplay.textContent = result;
    }
}

// Math functions, per assignment guidelines
function Add(a, b) {
    console.log("In addition");
    // console.log(a);
    // console.log(b);
    // console.log(operand);
    result = a + b;
    return result;
}

function Subtract(a, b) {
    console.log("In subtraction");
    // console.log(a);
    // console.log(b);
    // console.log(operand);
    result = a - b;
    return result;
}

function Multiply(a, b) {
    console.log("In Multiplication");
    // console.log(a);
    // console.log(b);
    // console.log(operand);
    result = a * b;
    return result;
}

function Divide(a, b) {
    console.log("In Division");
    // console.log(a);
    // console.log(b);
    // console.log(operand);
    result = a / b;
    return result;
}
