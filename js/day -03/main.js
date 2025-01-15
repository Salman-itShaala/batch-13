const num1 = 10;

const num2 = 20;

let sum = num1 + num2;

// console.log(sum);

// string

const firstName = "Soham";

const lastName = "Patil";

// string concatenation
const intro = "My name is ${firstName} " + firstName + " " + lastName;

// backticks --> ES6 (2015)
const introduction = `My name is ${firstName} ${lastName}`;

console.log(intro);

// object

const person = {};

// add values to object

person.firstName = "Deepak";
person.age = 45;

// to access the values

console.log(person.firstName);
console.log(person.age);

person["fullName"] = "Deepak Kalal";

console.log(person["age"]);
