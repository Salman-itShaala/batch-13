// async js using callbacks, promises, async-await

// async and await

const type = document.querySelector(".joke-type");
const setup = document.querySelector(".setup");
const punchline = document.querySelector(".punchline");

function getJoke() {
  const jokePromise = fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );

  jokePromise
    .then((res) => res.json())
    .then((data) => {
      type.innerText = "Type : " + data.type;
      setup.innerHTML = "Setup : " + data.setup;
      punchline.innerHTML = "Punchline : " + data.punchline;
    })
    .catch((error) => console.log(error));
}

async function getJokeWithAsyncAwait() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");

  const data = await res.json();

  type.innerText = "Type : " + data.type;
  setup.innerHTML = "Setup : " + data.setup;
  punchline.innerHTML = "Punchline : " + data.punchline;
}
