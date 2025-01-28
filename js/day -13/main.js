// * * * *
// * * * *
// * * * *

// empty string

// write a function which will take two inputs ie. rows and columns
// and will print start pattern of rows x columns

function printPattern(rows, columns) {
  let patternString = "";

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      patternString = patternString + " * ";
    }
    patternString = patternString + "\n";
  }

  console.log(patternString);
}

// *
// * *
// * * *

let patternString = "";

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= i + 2; j++) {
    if (i + j <= 3) {
      patternString = patternString + "   ";
    } else {
      patternString = patternString + " * ";
    }
  }
  patternString = patternString + "\n";
}

console.log(patternString);
