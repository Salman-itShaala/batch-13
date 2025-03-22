import React from "react";
import "./home.css";
import Categories from "../../components/home-categories/Categories";

const Home = () => {
  // const videos = [
  //   {
  //     img: url,
  //     channelImageUrl : url,
  //     title: "",
  //     channelName : "",
  //     vies: "",
  //     timestamp : ""
  //   }
  // ]

  return (
    <section className="home-section">
      <Categories />
    </section>
  );
};

export default Home;
