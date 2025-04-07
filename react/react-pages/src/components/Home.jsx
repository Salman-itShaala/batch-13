import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {/* <a href="/contact">Contact page</a> */}
      <Link to="/contact">Contact page</Link>
      <br />
      <Link to="/about/12312">About page</Link>
    </div>
  );
}

export default Home;
