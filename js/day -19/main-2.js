// function delcaration

function doSomething() {
  console.log("doing something");
}

// function expression

add();

const add = function (num1, num2) {
  return num1 + num2;
};

// arrow functions --> ES6

const mult = () => {
  // function body
  console.log("From arrow fn");
};
