import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import React from "react";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";
import EffectHookCounter1 from './components/Effect/EffectHookCounter1'
import HookMouse from './components/Effect/HookMouse'
import MouseContainer from './components/Effect/MouseContainer'

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/>*/}
      {/* <HookCounter/> */}
      {/* <HookCounter2/> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}
      {/* <EffectHookCounter1/> */}
      {/* <HookMouse/> */}
      <MouseContainer/>
    </div>
  );
}

export default App;
