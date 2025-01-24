// num = 23, check whether given number is prime or not

// a ^ b --> a ** b

let num = 30;

let isPrime = true;

for (let i = 2; i <= num / 2; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

isPrime
  ? console.log(num, "is Prime number")
  : console.log(num, "is not a prime number");

//  let lastNumber = 10;  1 + 2 + 3 + 4 + 5 + 6 + 7+ 8+ 9 + 10

// time complexity --> n
// time complexity --> 1

let lastNumber = 10;

let sum = 0;

for (let i = 1; i <= lastNumber; i++) {
  sum = sum + i;
}

console.log(sum);

let givenNum = 1233;
let sumOfDigits = 0;

while (givenNum !== 0) {
  // unit digit
  const digit = givenNum % 10;

  //calculating sum
  sumOfDigits = sumOfDigits + digit;

  // deleting numbers last digit
  givenNum = Math.floor(givenNum / 10);
}

console.log(sumOfDigits);

// Todo: - calculate number of digits in given number

// find reverse of given number (assume that given number is three digit number) --> 123 - 321

// check if given number is palidrome or not... palindrome number --> 121 - 121
