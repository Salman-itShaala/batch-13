const marks = [4.5, 45, 88, 45, 1, 2, 3, 4, 6, 7, 8, 5];

// 0 - marks.length

let random = Math.floor(Math.random() * marks.length);

console.log(marks[random]);
// calculate average marks of given array

// 1,2,3,4 --> sum / 4

let sum = 0;

for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}

console.log("avrg of given arrays is", sum / marks.length);
