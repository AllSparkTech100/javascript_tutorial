// Array Methods;

const users = [
    {firstName: "John", lastName: "Doe", age: "18", gender:"Male", isMarried: false},
    {firstName: "Peter", lastName: "James", age: "21", gender:"Male", isMarried:true},
    {firstName: "Stella", lastName: "Wonder", age: "20", gender:"Female", isMarried: true},
    {firstName: "Bright", lastName: "Doe", age: "19", gender:"Female", isMarried: false},
];

let user = (users.length);
console.log(user);

// ways to get specific things in an array.

const femaleUsers = users.filter ((singleValue) => singleValue.gender === "Female",);
console.log(femaleUsers);

const maleUsers = users.filter ((singleValue) => singleValue.gender === "Male");
console.log(maleUsers);

const males = users.filter((users) => users.gender === "Male");
console.log(males);

const age = users.filter((users)=> users.age >= "18" );
console.log(age);


// Ex2:
const colors = ["Red", "Green", "Blue"];
const anotherColor = ["Orange", "Yellow", "Pink"];
const combinedColors = [...colors, ...anotherColor]; //this will also add colors
console.log([...colors,"grey"]); // adds up grey;
console.log([...colors, ...anotherColor]) //adds up both colors;
for (i = 0; i < combinedColors.length; i++) {
    console.log(i); // this will show numbers alone.
    console.log( `${combinedColors} : ${i}`); // this will show names
}




// Declaring a java script variable

let a = 2;
let b = 4;

let c = a + b;
console.log (c);

// Arrays
const food = ["rice", "beans", "goat"];
food [1] = "fish"
console.log (food);

// adding to an array
const Items = ["Bag", "Jeans", "Shoe", "Jogas", "Phones"];
Items.push ("garden")
console.log (Items)

// removing the last item of an array
const Users = ["girl", "man", "she"]
Users.pop ()
console.log (Users)

// removing the first item in an array
const User = ["girl", "man", "she"]
User.shift ()
console.log (User)

// adding to the first
const Use = ["girl", "man", "she"]
Use.unshift ("him")
console.log (Use)