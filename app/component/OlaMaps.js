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
    <div className="flex relative ">
      <DeckGL
        style={{ width: "50vw", height: "80vh", overflow: "hidden", position:"absolute", right:"0"}}
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

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );