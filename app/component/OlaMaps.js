"use client"

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { useState } from "react";

// import DeckGL from "@deck.gl/react";
// import StaticMap from "react-map-gl";
// import maplibregl from "maplibre-gl";

// import DeckGL from "@deck.gl/react";
// import { StaticMap } from "@deck.gl/mapbox";
// import maplibregl from "maplibre-gl";

// import "maplibre-gl/dist/maplibre-gl.css";

// -------------------- correct code below-----------------------------------------------
import { useState } from "react";
import DeckGL from "@deck.gl/react";
import maplibregl from "maplibre-gl";
import StaticMap from 'react-map-gl'; // Ensure this matches the library you are using
import "mapbox-gl/dist/mapbox-gl.css";


const OlaMaps = () => {
  const [viewState, setViewState] = useState({
    longitude: 75.3433,
    latitude: 19.8762,
    zoom: 10,
  });

  return (
    <div className="flex relative">
      <DeckGL
        style={{ width: "48vw", height: "80vh", overflow: "hidden", position:"absolute", right:"0",borderRadius:"10px", margin:"10px"}}
        viewState={viewState}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        controller={true}
        layers={[]}
      >
        <StaticMap
          mapLib={maplibregl}
          mapStyle="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json"
          transformRequest={(url, resourceType) => {
            if (url.includes("?")) {
              url = url + "&api_key=jpqoyx7O6gYKwgHzo0VApPEp3tOswsCku9gj4hdz";
            } else {
              url = url + "?api_key=jpqoyx7O6gYKwgHzo0VApPEp3tOswsCku9gj4hdz";
            }
            return { url, resourceType };
          }}
        />
      </DeckGL>
    </div>
  );
};

export default OlaMaps;


// ----------------------------over---------------
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );










// import { useEffect, useState } from "react";
// import axios from "axios"; // For making API requests
// import DeckGL from "@deck.gl/react";
// import maplibregl from "maplibre-gl";
// import StaticMap from 'react-map-gl';
// import "mapbox-gl/dist/mapbox-gl.css";

// const OlaMaps = ({ address }) => {
//   const [viewState, setViewState] = useState({
//     longitude: 75.3433,
//     latitude: 19.8762,
//     zoom: 10,
//   });
//   const [error, setError] = useState("");

//   // Fetch coordinates based on the address prop
//   const fetchCoordinates = async () => {
//     if (!address) {
//       setError("No address provided.");
//       return;
//     }

//     try {
//       const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
//         params: {
//           q: address,
//           key: 'jpqoyx7O6gYKwgHzo0VApPEp3tOswsCku9gj4hdz', // Replace with your API key
//         },
//       });

//       if (response.data.results.length > 0) {
//         const { lng, lat } = response.data.results[0].geometry;
//         setViewState({
//           longitude: lng,
//           latitude: lat,
//           zoom: 12, // Adjust zoom level as needed
//         });
//         setError(""); // Clear any previous error messages
//       } else {
//         setError("No results found for the given address.");
//       }
//     } catch (error) {
//       console.error("Error fetching coordinates:", error);
//       setError("Error fetching coordinates. Please try again.");
//     }
//   };

//   // Fetch coordinates when the component mounts or when the address changes
//   useEffect(() => {
//     fetchCoordinates();
//   }, [address]);

//   return (
//     <div className="flex relative">
//       <DeckGL
//         style={{ width: "50vw", height: "80vh", overflow: "hidden", position: "absolute", right: "0" }}
//         viewState={viewState}
//         onViewStateChange={({ viewState }) => setViewState(viewState)}
//         controller={true}
//         layers={[]}
//       >
//         <StaticMap
//           mapLib={maplibregl}
//           mapStyle="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json"
//           transformRequest={(url, resourceType) => {
//             if (url.includes("?")) {
//               url = url + "&api_key=jpqoyx7O6gYKwgHzo0VApPEp3tOswsCku9gj4hdz";
//             } else {
//               url = url + "?api_key=jpqoyx7O6gYKwgHzo0VApPEp3tOswsCku9gj4hdz";
//             }
//             return { url, resourceType };
//           }}
//         />
//       </DeckGL>

//       {/* Display error messages */}
//       {error && (
//         <div style={{ position: "absolute", top: "20px", left: "20px", color: "red" }}>
//           {error}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OlaMaps;
