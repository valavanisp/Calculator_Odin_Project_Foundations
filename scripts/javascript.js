// read in button clicks
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', getButtonText);
});

// function to get info from buttons
function getButtonText(e) {
    console.log(e.target.innerText);
}