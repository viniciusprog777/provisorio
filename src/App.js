import React from "react";
import InstituitionRegister from "../src/pages/InstituitionRegister";
import Login from "../src/pages/Login"
import Routes from "./router";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <div className="app">
      <>
        <GlobalStyles />
        <Routes />
      </>
    </div>
  );
}

export default App;
