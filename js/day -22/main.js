// export

export const userName = "Salman";

export function greet() {
  console.log("Good morning");
}

//  export default --> one file can have only one export default

function doSomething() {
  console.log("doing something");
}

export default doSomething;

//

const names = ["salman", "ajay", "aamir", "vicky", "hrithik"];

console.log("array before editing", names);

const newArr = [];
for (let i = 0; i <= 4; i++) {
  newArr.push(names[i].toUpperCase());
}

console.log("Array after editing", names);
console.log("NewArray after editing", newArr);

// const names = ["salman", "ajay", "aamir", "vicky", "hrithik"];

// reverse

export let reverseArray = [];

for (let i = 4, j = 1; i >= 0; i--) {
  let el = names[i];

  reverseArray.push(el);
}
