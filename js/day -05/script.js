// increment and decrement operator

let num = 23;

// pre-increment

num++;

console.log(num);

// Assignment operator

let num2 = 10;

num2 += 25; // num2 = num2 + 25;

console.log(num2); // 35

// ternary operator

const num3 = 20;

const num4 = 11;

// condition ? if true : if false;

num3 < num4
  ? console.log("num3 is less than number 4")
  : console.log("num3 is not less than number 4");

// + operator

// addition
// string concatenation
// string --> number

const num5 = +"10";

console.log(num5);

// let num = 45;

let number = 100;

number < 100
  ? console.log("Number is smaller than 100")
  : console.log("number is not smaller than 100");

//   let number = 33;
// 3 divisible hai ya nhi

let num6 = 33;

num6 % 3 === 0
  ? console.log("number is divisible by 3")
  : console.log("number is not divisible by 3");

// even or odd

const num7 = 19;

num7 % 2 === 0 ? console.log("Number is even") : console.log("Number is odd");

if (num7 % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}
