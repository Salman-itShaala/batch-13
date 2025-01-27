// find reverse of given number (assume that given number is three digit number) --> 123 - 321

let num = 121;
const temp = num; // 121
// const stringNum = 123 + "";

// console.log(stringNum.split("").reverse().join(""));

let reverseNum = 0;

while (num !== 0) {
  let digit = num % 10;
  reverseNum = reverseNum * 10 + digit;
  num = Math.floor(num / 10);
}

console.log(reverseNum, temp);

if (reverseNum === temp) {
  console.log("Given number is palindrome");
} else {
  console.log("Given number is \n not palindrome");
}

// *
// * *
// * * *

// row -> outer
// cols --> inner

// *
// * *
// * * *

//      *
//    * *
//  * * *
for (let i = 1; i <= 3; i++) {
  let pattern = "";

  for (let j = 1; j <= 3; j++) {
    pattern = pattern + " * ";
  }

  console.log(pattern);
}
