const selectedH1 = document.querySelector(".my-h1");

// content change --> innerHTML, textContent, innerText

// changing styles --> .style.nameOfStyle = "value"
// styles applied from js is always applied inline to element

console.log(selectedH1);

function changeH1() {
  selectedH1.classList.toggle("my-h1");

  //   if (selectedH1.classList.contains("my-h1")) {
  //     selectedH1.classList.remove("my-h1");
  //   } else {
  //     selectedH1.classList.add("my-h1");
  //   }
}

function toggleVisibility() {
  // display: none; --> hidden
  if (selectedH1.style.display == "none") {
    selectedH1.style.display = "block";
  } else {
    selectedH1.style.display = "none";
  }
}
