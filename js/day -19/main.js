const parentDiv = document.getElementById("parent-div");
const inputEl = document.getElementById("my-input");
const para = document.getElementById("para");

function createPara() {
  // create
  const para = document.createElement("p");
  para.innerHTML = inputEl.value;

  // add
  parentDiv.appendChild(para);

  //   remove
  //   parentDiv.remove(para);
  //
}

function addImage() {
  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
  );

  img.setAttribute("width", "300");
  parentDiv.append(img);
}
