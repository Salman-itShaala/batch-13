// default parameter value

// global variables
const pi = 3.143;

function getAreaOfCircle(radius) {
  // local varible --> block scoped
  if (true) {
    var userName = "Salman";
  }

  console.log(userName);

  console.log(pi * radius * radius);
}

getAreaOfCircle(10);

for (let i = 0; i <= 9; i++) {
  console.log("hi");
}

console.log(i);
