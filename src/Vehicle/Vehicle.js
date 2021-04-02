import React, { useEffect, useState } from "react";
import "./Vehicle.css";

//http://console-api.tracmobility.com/test/vehicles?page=0&size=10

const Vehicle = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    const getVehicles = async () => {
      const response = await fetch(
        "http://console-api.tracmobility.com/test/vehicles?page=0&size=10"
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse.content);
      setApi(jsonResponse.content);
    };
    getVehicles();
  }, []);

  return (
    <div className="vehicles-container">
      <div className="vehicle-info">
        <h5>Vehicles</h5>
        <ul>
          {api.map((response, index) => {
            return <li>{response.createdAt.toString()}</li>;
          })}
        </ul>
      </div>
      <div className="vehicle-status">
        <h5>Status</h5>
        <ul>
          {api.map((response, index) => {
            return <li>{response.status}</li>;
          })}
        </ul>
      </div>
      <div className="lock-status">
        <h5>Lock Status</h5>
        <ul>
          {api.map((response, index) => {
            return <li>{response.lockStatus}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Vehicle;
