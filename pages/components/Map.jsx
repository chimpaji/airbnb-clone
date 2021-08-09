import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const coordinates = searchResults.map((location) => ({
    latitude: location.lat,
    longitude: location.long,
  }));

  const center = getCenter(coordinates);
  console.log("center", center);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // The latitude and longitude of the center of London
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/chimpaji/cks41mfxabplj17pljr5fg8it"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_APIKEY}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((location) => (
        <>
          {selectedLocation?.longitude && (
            <Popup
              className="z-50"
              longitude={selectedLocation?.longitude}
              latitude={selectedLocation?.latitude}
              offsetLeft={5}
              offsetTop={5}
              closeOnClick={true}
              closeButton={true}
              onClose={() => setSelectedLocation(null)}
            >
              {location.location}
            </Popup>
          )}
          <Marker latitude={location.lat} longitude={location.long}>
            <p
              className="animate-bounce z-0"
              onClick={() =>
                setSelectedLocation({
                  latitude: location.lat,
                  longitude: location.long,
                })
              }
            >
              🏠
            </p>
          </Marker>
        </>
      ))}
    </ReactMapGL>
  );
}

export default Map;
