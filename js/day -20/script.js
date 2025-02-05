const btn = document.getElementById("my-btn");

const doSomething = () => {
  console.log("Button is clicked, from arrow fn");
};

// onclick
// ondblclick
// onchange
// onkeydown

btn.onclick = (event) => {
  console.log(event.target);
  console.log("Button is clicked");
};
