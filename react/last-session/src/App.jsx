import { h1, h2 } from "framer-motion/client";
// import "./App.css";
import { Component, useEffect, useState } from "react";
import ButtonAppBar from "./components/ButtonAppBar";
import DashboardLayoutBasic from "./components/DashboardLayoutBasic";

function App() {
  return (
    <DashboardLayoutBasic>
      <div className="app">
        <Comp1>
          <p>Hello there</p>
        </Comp1>
        <ErrorBoundaryComp>
          <Comp2 />
        </ErrorBoundaryComp>
      </div>
    </DashboardLayoutBasic>
  );
}

function Comp1({ children }) {
  return (
    <h2>
      I'm First component
      {children}
    </h2>
  );
}

function Comp2() {
  // throw new Error("Something went wrong");
  return <h2>I'm second component</h2>;
}

class ErrorBoundaryComp extends Component {
  constructor(props) {
    super(props);

    this.state = { isError: false };
  }

  componentDidCatch() {
    this.setState({ isError: true });
  }

  render() {
    if (this.state.isError) {
      return <h2 style={{ color: "red" }}>Something went wrong</h2>;
    } else {
      return this.props.children;
    }
  }
}

export default App;
