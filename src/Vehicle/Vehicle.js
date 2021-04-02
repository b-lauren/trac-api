import React, { useEffect, useState } from "react";

//http://console-api.tracmobility.com/test/vehicles?page=0&size=10

const Vehicle = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    const getVehicles = async () => {
      const response = await fetch(
        "http://console-api.tracmobility.com/test/vehicles?page=0&size=10"
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setApi(jsonResponse);
    };
    getVehicles();
  }, []);

  return (
    <div>
      <h1>Vehicles</h1>
      <ul>
        {jsonResponse.content.map((response, index) => {
          return <p>{response[index]}</p>;
        })}
      </ul>
    </div>
  );
};

//   const Comment = ({ jsonResponse }) => {
//     return (
//       <ul>
//         {jsonResponse.map((data) => {
//           return (
//             <li>
//               <p{data.content}</p>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   };
// };

export default Vehicle;
