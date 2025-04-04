import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-8 text-blue-400">
      <Link to="/counter" className="hover:text-blue-700">
        Counter
      </Link>

      <Link to="/users" className="hover:text-blue-700">
        Users
      </Link>
    </div>
  );
};

export default Home;
