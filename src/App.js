import React, { component } from "react";
import "./App.css";
import Vehicle from "./Vehicle/Vehicle";
import Nav from "./Nav/Nav";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Nav />
      <Vehicle />
      <Dashboard />
    </div>
  );
}

export default App;
