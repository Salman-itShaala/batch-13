// Arrays : Collection of data

// how to write array --> square brackets

let students = ["salman", "vedant", "srushti"]; // 3

// index

console.log(students[0]);

// length of array
console.log(students.length);

// changing element
students[0] = "shyam";

students[3] = "pravin";

students.push("vaibhav");

// will add element at the end of array
students.push("abcd");

console.log(students);

// remove last element
students.pop(); // abcd
students.pop(); // vaibhav

// add element in the start of array
students.unshift("abcd");

// remove first element
students.shift();
students.shift();

console.log(students);

// to delete elements from specific index
// splice(startIndex, deleteCount);

students.splice(1, 0, "efgh", "lskjdflksd");

console.log(students);
