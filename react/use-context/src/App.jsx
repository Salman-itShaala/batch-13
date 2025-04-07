import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import MemoComponent from "./components/MemoComponent";

export const CounterContext = createContext();
export const AuthContext = createContext();

function App() {
  return (
    <>
      {/* <Component2 /> */}
      {/* <Component3 /> */}
      {/* <Component4 /> */}
      <MemoComponent />
    </>
  );
}

// function App() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <>
//       {/* <AuthContext.Provider value={}> */}
//         <CounterContext.Provider value={[counter, setCounter]}>
//           <h1>From app Component</h1>
//           <Component1 />
//           <Component2 />
//         </CounterContext.Provider>
//       {/* </AuthContext.Provider> */}
//     </>
//   );
// }

export default App;
