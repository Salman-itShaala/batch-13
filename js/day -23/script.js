let myArr = ["a", "b", "c", "w"];

// Performs the specified action for each element in an array.

let nums = [1, 2, 3, 4, -1, -4, -5, 10];

// [2, 3, 4, 5]
const modifiedArray = nums.map((el) => {
  return el + 1; // 5
});

// [ 2, 3, 4, -1, -4, -5, 10];

// [1, 2, 3, 4, 10]
const filteredArray = nums.filter((el) => {
  return el > 0;
});

console.log(filteredArray);

let names = ["ram", "shyam", "raju", "baburao"];

// ["**ram**", "**shyam**", "**raju**", "**baburao**"]

const starArr = names.map((el) => {
  return "**" + el + "**";
});

console.log(starArr);

const todos = [
  {
    id: 1,
    todo: "Do something nice for someone you care about",
    completed: false,
  },
  {
    id: 2,
    todo: "Memorize a poem",
    completed: true,
  },
  {
    id: 3,
    todo: "Watch a classic movie",
    completed: true,
  },
  {
    id: 4,
    todo: "Watch a documentary",
    completed: false,
  },
  {
    id: 5,
    todo: "Invest in cryptocurrency",
    completed: false,
  },
];

const completedTodos = todos.filter((el) => {
  return el.completed;
});

console.log(completedTodos);
