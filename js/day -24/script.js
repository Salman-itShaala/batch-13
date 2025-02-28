let nums = [4, 2, 11, 7, 8, 1, 8, 2];

//  [4, 2, 11, 7, 8, 1, 8, 2];
//  [8, 4...]

let newArrray = [];

nums.forEach((el) => {
  let doubledEl = el * 2;
  newArrray.push(doubledEl);
});

let doubledArray = nums.map((el) => {
  return el * 2;
});

let cubeArray = nums.map((el) => {
  return el * el * el;
});

let filteredArray = nums.filter((num) => {
  if (num >= 5) {
    return true;
  } else {
    return false;
  }
});

// console.log("Filtered Array is ", filteredArray);

// console.log("Doubled array is ", doubledArray);

// console.log("Cube Array is ", cubeArray);

// console.log("Original array is ", nums);
