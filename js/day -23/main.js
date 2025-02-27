let myArr = ["a", "b", "c", "w"];

let anotherArr = ["d", "e", "f"];

// let mergedArr = ["a", "b", "c", "d", "e", "f"];

// Spread operator

let mergedArr = [...myArr, ...anotherArr];

console.log(mergedArr);

// reverse given string

// "Pune"

let city = "Pune";

let splitArry = city.split(""); // ["P", "u", "n", "e"]

const reversedArr = splitArry.reverse(); // ["e", "n", "u", "P"]

console.log(reversedArr.join(""));

// Array destructring
const names = ["ram", "shyam", "raju"];

let st1 = names[0];

let st2 = names[1];

// let [st1, st2] = names;

let [firstName, lastName] = ["salman", "shaikh"];

console.log(firstName);
