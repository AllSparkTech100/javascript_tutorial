let a = parseInt(prompt("Enter the first value:"));
let b = parseInt(prompt("Enter the second value:"));

document.getElementById("firstvalue").textContent = a;
document.getElementById("secondvalue").textContent = b;

let resultE1 = document.getElementById("result");

function add() {
    let result = a + b;
    resultE1.textContent = "sum: " + result;
}

function sub() {
    let result = a - b;
    resultE1.textContent = "difference: " + result;
}

function div() {
    let result = a / b;
    resultE1.textContent = "quotient: " + result;
}

function mul() {
    let result = a * b;
    resultE1.textContent = "product: " + result;
}