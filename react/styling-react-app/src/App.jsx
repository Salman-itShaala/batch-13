import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  let isCompleted = true;

  const styleObj = {
    backgroundColor: isCompleted ? "green" : "yellow",
    fontSize: "40px",
  };

  return (
    <>
      <h1 className="bg-red-100 text-center flex">Hello there</h1>
      <div className="text-center">hii</div>
      {/* <Header />
      <HeroSection />
      <Footer /> */}
    </>
  );
}

export default App;
