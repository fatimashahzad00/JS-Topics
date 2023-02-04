// let car = {
//     name:"Fiat",
//     model: 2018, 
//     color: "red",
//     automatic: true
// };
// let car1 = {
//     name:"Honda",
//     model: 2019, 
//     color: "white",
//     automatic: false
// }
// console.log(car);

// Person object - Key Value Pair syntax
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     "eye-color": "blue"
// };
// console.log(person.age);
// console.log(person["eye-color"]);// if a an object element in a string so we can return into [] brackets or in strings

// console.log(Person);


// THE ARRAYS OBJECT
// We can store multiple objects in an Array

// Persons Array - Key Value Pair syntax
const persons = [
    {
        firstName: "Ali",
        lastName: "Shahzad",
        age: 15,
        "eye-color": "black"
    },
    {
        firstName: "Fatima",
        lastName: "Batool",
        age: 17,
        "eye-color": "grey"
    },
];

// Access Person1
// console.log(persons[1]); // Method 1 to print array object
// console.log(persons[0]); // Method 2 to print array object || if we print an array indeex 0 object after index1 object so it will first print index 1 then index 0
// console.log(persons[0]); // Method 1 to print array object
// console.log(persons[1]); // Method 1 to print array object

// Now persons only age
// console.log(persons[0].age);
// console.log(persons[1].age);

// Person -1 index return
console.log(persons[-1]);