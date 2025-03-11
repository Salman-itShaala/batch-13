import "./App.css";
import { FirstComponent } from "./components/FirstComponent";
import Header from "./components/Header";

function App() {
  const fName = "Salman";

  return (
    <div className="container">
      <Header firstName={fName} lastName="shaikh" />

      <FirstComponent />
    </div>
  );
}

export default App;
