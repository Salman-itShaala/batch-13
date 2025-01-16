//  Js Operators

// Arithamtic Operators

let a = 10;

let b = 20;

let sum = a + b;
let sub = a - b;
const mult = a * b;
const div = a / b;

// modulo operator --> %
const remainder = 3 % 10;

// to calculate power
const square = 4 ** 2;

console.log("Sum of given numbers is ", sum);
console.log("Substraction of given numbers is ", sub);
console.log("Multiplicatoin of given numbers is", mult);
console.log("Division of given numbers is", div);
console.log("Remainder of  is ", remainder);
console.log("Square of 4 is ", square);

console.log(0 / 0); // NaN

// typeof Infinit, NaN --> number

// Comaprison operators

const num1 = 10;

const num2 = 20;

console.log(num1 > num2); // false

console.log(num1 < num2); // true

console.log(num1 >= num1); // true

console.log(num1 <= num2); // true

const student1 = "kartik";

const student2 = "vedant";

console.log(student1 < student2); // true

// Equality operators

const firstNumber = 11;
const secondNumber = 10;

console.log(firstNumber == secondNumber); // false
console.log(firstNumber != secondNumber); // true

console.log(10 == 10);
console.log("Ten" == 10); // false
console.log("ten" == 10); // false
console.log("10" == 10); // true
console.log("10" === 10); // false

// Logical operators

console.log(10 > 15 && console.log("Kuch Random"));
