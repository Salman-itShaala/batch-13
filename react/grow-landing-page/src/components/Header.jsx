import "./header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img
            src="https://resources.groww.in/web-assets/img/website-logo/groww-logo-light.svg"
            alt=""
          />
        </a>
      </div>
      <div className="header-search">
        <input type="search" placeholder="Search groww..." />
      </div>
      <div className="login-register">
        <a href="/">Login/Register</a>
      </div>
    </header>
  );
}

export default Header;
