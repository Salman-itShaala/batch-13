// select

// id

const selectedEl = document.getElementById("my-h1");

console.log(selectedEl);

const selectedH2 = document.getElementsByClassName("my-h2");
// HTMLCollection --> Array like data structure,
//  we can access elements using index

console.log(selectedH2);

const selectedElements = document.getElementsByTagName("h2");

console.log(selectedElements);

const el1 = document.querySelector(".my-h2");

console.log(el1);

const els = document.querySelectorAll(".my-h2");

console.log(els);
