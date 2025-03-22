import React from "react";
import "./categories.css";

const Categories = () => {
  const topics = [
    "All",
    "Javascript",
    "Computer Programming",
    "Music",
    "Podcast",
    "Live",
    "Coding",
    "Javascript",
    "Computer Programming",
    "Music",
    "Podcast",
    "Live",
    "Coding",
    "Javascript",
    "Computer Programming",
    "Music",
    "Podcast",
    "Live",
    "Coding",
    "Javascript",
    "Computer Programming",
    "Music",
    "Podcast",
    "Live",
    "Coding",
    "Design",
    "Data Science",
    "Software Engineering",
    "Python",
    "Machine Learning",
    "Blockchain",
    "Robotics",
    "Cybersecurity",
    "Mobile Development",
    "Virtual Reality",
    "Cloud Computing",
    "DevOps",
    "Entrepreneurship",
    "Marketing",
    "Startup",
  ];

  return (
    <div className="cat-parent">
      <ul className="home-categories-wrapper">
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
