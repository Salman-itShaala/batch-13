import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function About() {
  const params = useParams(); // {}

  console.log(params.id);
  // 101

  const navigate = useNavigate();

  function goToHome() {
    // checks, code

    let isLoggedIn = true;

    if (isLoggedIn) {
      navigate("/");
    } else {
      alert("You can not go to home page");
    }
  }

  return (
    <div>
      <h1>About Page</h1>
      <h2>For user with id {params.id}</h2>

      <Link to="/">Home</Link>

      <br />
      <br />

      {/* <a href="/">Home</a> */}

      <br />
      <br />

      <button onClick={goToHome}>Go to home page</button>
    </div>
  );
}

export default About;
