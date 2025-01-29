"use strict";

// to show some messsege to user

// question

// yes no question
// let isAbove18 = confirm("Are you above 18??");

// if (isAbove18) {
//   alert("You can vote");
// } else {
//   alert("You can not vote");
// }

// const userName = prompt("Enter your name...");

// console.log("Hello how are you " + userName);

function doSomething() {
  const num1 = +prompt("Enter first number");

  const num2 = +prompt("Enter second number");

  let sum = num1 + num2;

  alert(sum);
}

function sayHello() {
  alert("Hello how are you???");
}

function primeNumber(num1) {
  let isPrime = true;

  for (let i = 2; i < num1; i++) {
    if (num1 % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime === true) {
    console.log(num1);
  }
}
for (let i = 2; i <= 100; i++) {
  primeNumber(i);
}
