import React, { component } from "react";
import "./App.css";
import Vehicle from "./Vehicle/Vehicle";
import Nav from "./Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Trac API</h1>
      <Vehicle />
    </div>
  );
}

export default App;
