// const h1 = document.getElementById("my-h1");

// // https://dummyjson.com/todos

// const p1 = fetch("https://dummyjson.com/todos");

// p1.then((res) => res.json())

//   .then((data) => {
//     // html add
//     // data -> {total  : 254}
//     const todo1 = data.todos[0];
//     console.log(todo1);

//     h1.innerHTML = todo1.todo;
//   })

//   .catch((err) => console.log(err));

function sendReq() {
  const p1 = fetch("https://dummyjson.com/todos");

  p1.then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
