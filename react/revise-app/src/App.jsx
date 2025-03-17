import Header from "./components/Header";
import Sports from "./components/Sports";
import NewComponent from "./NewComponent";

function App() {
  const name = "salman";

  const sports = ["Cricket", "Football", "Tennis", "Hockey", "Kabaddi"];

  return (
    <div>
      <Sports sports1={sports} />
    </div>
  );
}

export default App;
