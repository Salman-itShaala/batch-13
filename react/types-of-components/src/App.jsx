import { Component, useState } from "react";
import "./App.css";
import NewClassCompo from "./NewClassCompo";
import AddNumbers from "./AddNumbers";
import UpdateTitle from "./UpdateTitle";

function App() {
  return (
    <>
      <UpdateTitle />
      {/* <AddNumbers /> */}
    </>
  );
}

class MyClassComp extends Component {
  componentDidMount() {
    console.log("Myclasscompo mounted");
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component  unmounted");
  }

  render() {
    return (
      <>
        <h1>Hii there</h1>
      </>
    );
  }
}

export default App;
