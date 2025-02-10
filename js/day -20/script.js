const btn = document.getElementById("my-btn");

const doSomething = () => {
  console.log("Button is clicked, from arrow fn");
};

btn.onclick = () => {
  btn.classList.toggle("new-class");
};

document.onmousemove = (e) => {
  console.log("X is ", e.clientX);
  console.log("Y is ", e.clientY);
};

// onclick
// ondblclick
// onchange
// onkeydown

// document.onkeydown = (event) => {
//   console.log(event);
//   console.log("Pressing key ", event.key);
// };
