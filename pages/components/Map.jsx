import { useState } from "react";
import ReactMapGL from "react-map-gl";

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // The latitude and longitude of the center of London
    latitude: 51.5074,
    longitude: -0.1278,
    zoom: 10,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/chimpaji/cks41mfxabplj17pljr5fg8it"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_APIKEY}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}

export default Map;
