const image = document.getElementById("my-img");

// getAttribute("attributeName")
// removeAttribute("attributeName")
// setAttribute("attributeName", "value")

function toggle() {
  image.setAttribute(
    "src",
    "https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg"
  );

  //   const selectedH1 = document.querySelector("h1");
  //   selectedH1.classList.toggle("my-h1");
}
