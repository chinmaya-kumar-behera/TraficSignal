import "./App.css";
import React from "react";
import Intro from "./views/Intro";
import Introduction from "./views/introduction";
import { ScrollIndicator } from "./components/shared";

function App() {
  return (
    <React.Fragment>
      <ScrollIndicator />
      <Intro />
      <Introduction id={"introduction"} />
    </React.Fragment>
  );
}

export default App;
