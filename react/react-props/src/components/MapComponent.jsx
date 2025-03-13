import React from "react";

const MapComponent = () => {
  const sports = ["Cricket", "Football", "Hockey", "Kabaddi"];

  const students = ["Vaibhav", "Riya", "Akash", "Salman"];

  const newArr = sports.map((sport) => {
    return (
      <div key={sport} className="my-li">
        Sport is {sport}
      </div>
    );
  });

  return (
    <div className="container">
      {newArr}

      {students.map((name, index) => {
        return (
          <div>
            Student {index + 1} - {name}
          </div>
        );
      })}
    </div>
  );
};

export default MapComponent;
