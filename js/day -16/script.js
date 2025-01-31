const options = ["rock", "paper", "scissors"];

function playGame() {
  // computer choice

  let tempUsersChoice = prompt("Enter your choice");

  // !null --> true
  // tempUsersChoice === null || tempUsersChoice === ""
  if (!tempUsersChoice) {
    console.log("hiii");
    alert("Enter valid input");
    playGame();
    return;
  }

  let usersChioce = tempUsersChoice.trim().toLowerCase();

  if (
    usersChioce !== "rock" &&
    usersChioce !== "paper" &&
    usersChioce !== "scissors"
  ) {
    alert("Enter valid input");
    playGame();
    return;
  }

  const computersChoice = getComputersChoice();

  // check who won
  if (
    (usersChioce === "rock" && computersChoice === "scissors") ||
    (usersChioce === "paper" && computersChoice === "rock") ||
    (usersChioce === "scissors" && computersChoice === "paper")
  ) {
    alert("Congo.. you won");
  } else if (
    (computersChoice === "rock" && usersChioce === "scissors") ||
    (computersChoice === "paper" && usersChioce === "rock") ||
    (computersChoice === "scissors" && usersChioce === "paper")
  ) {
    alert("OOhhoo... computer have won , try again");
  } else {
    alert("Draw");
  }
}

function getComputersChoice() {
  let randomIndex = Math.floor(Math.random() * options.length); // 0 , 1, 2
  return options[randomIndex];
}

function getUsersChoice() {
  let tempUsersChoice = prompt("Enter your choice");

  // !null --> true
  // tempUsersChoice === null || tempUsersChoice === ""
  if (!tempUsersChoice) {
    console.log("hiii");
    alert("Enter valid input");
    getComputersChoice();
    return;
  }

  let usersChioce = tempUsersChoice.trim().toLowerCase();

  if (
    usersChioce !== "rock" &&
    usersChioce !== "paper" &&
    usersChioce !== "scissors"
  ) {
    alert("Enter valid input");
    getUsersChoice();
    return;
  }

  return usersChioce;
}
