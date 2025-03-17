function Header(props) {
  console.log(props.userName);

  return (
    <header>
      <a href="">Home</a>
      {/* <a href="">Login</a> */}
      <p>Welcome back {props.userName}</p>
    </header>
  );
}

export default Header;
