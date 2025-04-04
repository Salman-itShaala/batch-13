import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  //  https://dummyjson.com/users

  async function getUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");

      const data = await res.json();

      setUsers(data.users);
    } catch (error) {
      console.log("Error");
      alert("Not able to fetch data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-8">
      {loading ? (
        <div className="loader"></div>
      ) : (
        users.map((user) => {
          return <div>{user.firstName}</div>;
        })
      )}
    </div>
  );
};

export default Users;
