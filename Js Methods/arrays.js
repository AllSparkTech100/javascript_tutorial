// Array Methods;

const users = [
    {firstName: "John", lastName: "Doe", age: "18", gender:"Male", isMarried: false},
    {firstName: "Peter", lastName: "James", age: "21", gender:"Male", isMarried:true},
    {firstName: "Stella", lastName: "Wonder", age: "20", gender:"Female", isMarried: true},
    {firstName: "Bright", lastName: "Doe", age: "19", gender:"Female", isMarried: false},
];

// let user = (users.length);
// console.log(user);

// ways to get specific things in an array.

// const femaleUsers = users.filter ((singleValue) => singleValue.gender === "Female",);
// console.log(femaleUsers);

const maleUsers = users.filter ((singleValue) => singleValue.gender === "Male");
console.log(maleUsers);

// const males = users.filter((users) => users.gender === "Male");
// console.log(males);

// const age = users.filter((users)=> users.age >= "18" );
// console.log(age);

// const married = users.filter((users)=> users.isMarried === true)
// console.log(married)


// Ex2:
const colors = ["Red", "Green", "Blue"];
const anotherColor = ["Orange", "Yellow", "Pink"];
const combinedColors = [...colors, ...anotherColor]; //this will also add colors
// // console.log([...colors,"grey"]); // adds up grey;
// console.log([...colors, ...anotherColor]) //adds up both colors;
// for (i = 0; i < combinedColors.length; i++) {
//     // console.log(i); // this will show numbers alone.
//     console.log( `${i} : ${combinedColors}`); // this will show names & numbers side by side
// }


// this will give only numbers because of the index [i];
// for ( const i in combinedColors) {
//     console.log (Number (i));
// }

// //this will give the names of items in combinedColors
// for (const color of combinedColors) {
//     console.log(color);
// }

// const newcombinedColors = combinedColors.map((singleValue, index) => {
//     return {
//         id: index, colors:singleValue
//     };
// })
// console.log(newcombinedColors)

//gives name alone without the first and last name prefix
const newUsers = users.map((singleValue) => {
    return{
        name: `${singleValue.firstName} ${singleValue.lastName}`,
        age: singleValue.age,
        gender: singleValue.gender,
        isMarried: singleValue.isMarried
    }
})
console.log(newUsers);