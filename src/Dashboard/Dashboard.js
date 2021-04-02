import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="panels">
      <div className="panel-menu">
        <li>KPI Dashboard</li>
        <li>Task Map</li>
        <li>Task List</li>
        <li>Task Creation</li>
        <li>Rule Setting</li>
        <li>Vehicle Information</li>
        <li className="vehicle-list">Vehicle List</li>
      </div>
      <div className="panel-map">
        <div className="map-box">
          <h5>Vehicle Map</h5>
        </div>
      </div>
      <div className="panel-search">
        <div className="search-box">
          <h5>Vehicle Search</h5>
        </div>
      </div>
      <div className="panel-vehicles"></div>
    </div>
  );
};

export default Dashboard;
