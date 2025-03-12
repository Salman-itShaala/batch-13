import "./App.css";
import { FirstComponent } from "./components/FirstComponent";
import Header from "./components/Header";

function App() {
  const sports = ["Cricket", "Football", "Hockey", "Kabaddi"];

  return (
    <div className="container">
      {sports.map((sport) => {
        return (
          <div key={sport} className="my-li">
            {sport}
          </div>
        );
      })}
    </div>
  );
}

export default App;
