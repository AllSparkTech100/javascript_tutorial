// let game = prompt(`What is your name`);
// let weapon = ["guns", "grenades", "pistol", "musket"];
// // weapon[1] = game;
// // console.log(weapon);
// console.log(weapon.length);


//logic operators

// && --- logical AND
// || --- logical OR
// ! ---- logical NOT
// ?? ---- Nullish Coalescing

// OR (||) finds the first truthy value and evaluates  from left to right

alert(false || true)// true
alert(false || false)//false
alert(true || true)//true
alert(true || false )//true


// EXAMPLES
if (1 || 0){
    alert("hello")
}

let minutes = 30;
if (minute < 10 || minutes > 40){
    alert("No time!")
} // this will be false.

let minute = 30;
let isMonday = true;


if (minute < 10 || isMonday) {
  alert("No time!");
}

// AND (&&) finds the first falsy value or the last value if none were found. it first converts the given condition to a boolean.
alert(false && true)//false
alert(false && false)//false
alert(true && true)//true
alert(true && false)//false

let days = 7;
let hours = 4;
if (days == 7 && hours == 4) {
    alert("hello!");
}

if (1 && 0) {
    console.log("Game");
} // this will be false, it will not run.

alert(1 && 5); // the both are true values so the AND operator will give the last value which is 5 because its the last and its true.

alert(null && 5); // this will return null because null is a false value.

alert (2 && 45 && null && 12 && 0); // this will be null because it has seen a falsy value.(NULL).


// NOT (!) it is a uninary operator; this means it takes one operand, which returns the inverse value1

let a = true;

alert(!0); //true //false
alert(!a); // undefined
alert(!true); //false

// Nullish Coalescing (??) this returns the first defined value of the two operands

// m ?? n is //
// if m is defined, then return m
// if m is not defined... it returns n.

let a;
alert(a ?? "Hello"); // this will return hello because a is undefined.

let a = 10;
alert(a ?? "hello"); // this will return 10 because a is defined

let width = 0;
alert(width || 100); //100
alert(width ?? 100);//0
// because the width is defined.

//FOR LOOP 

//loop between 1 to 10.

//e.g
for (count = 1; count < 11; count++) {
    console.log(count);
}

//loop between 10 to 1
for (count = 10; count > 0; count--) {
    console.log(count);
}

//looping through an array
let comments = [
    "hey!",
    "looping is sweet",
    "let's do this",
    "For loop reduces headache"
]

for(let i = 0; i < comments.length; i++) {
    console.log(comments[i]);
}

// while loop an array
let comments = [
  "hey!",
  "looping is sweet",
  "let's do this",
  "For loop reduces headache",
]

let count = 0;
while (count < comments.length) {
  alert(comments[count]);
  count++;
}

// While loop
while(condition) {
    //loop body
}

//e.g
let count = 0; // initialized variable
while (count < 5) {
    alert(count);
    count++;
}

let b = 4;
while (b) {
  alert(b);
  b--;
}

// do..... while loop
do {
    loop body
} while (condition);

// the loop will first execute the body, then check the condition, and while its truthy execute i again and again.

let a = 0;
do{
    alert(a);
    a++;
}while(a < 4);

