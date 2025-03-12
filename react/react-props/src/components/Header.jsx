function Header({ firstName, lastName }) {
  const isLoggedIn = true;

  return (
    <header>
      {isLoggedIn ? (
        <h1>
          {" "}
          Welcome back {firstName} {lastName}{" "}
        </h1>
      ) : (
        <a href="/">Login</a>
      )}
    </header>
  );
}

export default Header;
