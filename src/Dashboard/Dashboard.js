import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="panels">
      <div className="panel-menu"></div>
      <div className="panel-allocation"></div>
      <div className="panel-balance"></div>
      <div className="panel-positions"></div>
    </div>
  );
};

export default Dashboard;
