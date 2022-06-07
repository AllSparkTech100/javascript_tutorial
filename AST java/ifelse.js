//if / else or else / if statement - this statement states that if a condition is true, the function will execute the code body.

if (condition //must be true) {
    //code body
} else{
    //code body.
}

//e.g
if (2) {
    alert("hello") // this will run/display hello because the condition is "true"
}

//e.g 2
if (true) {
    alert("this will run");
}

//e.g 3
let num = 22; // variable declaration
if (num <= 20) { //this condition is false therefore the age 20 will not be allowed into the club.
    alert("you can't enter the club");
} else {
    alert ("Welcome to the club");
}

//e.g 4
let age = 75;

if (age < 75) {
    console.log("You are not permitted");
} else if (age === 75) {
    alert("Your birthday card is ready");
} else {
    console.log ("Not eligible");
}