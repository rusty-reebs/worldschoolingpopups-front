import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import "../output.css";

const Map = ({
  locations,
  defaultLocation,
  zoomLevel,
  mapHeight,
  showPin,
  name,
}) => {
  const eventPin = {
    address: "",
    lat: defaultLocation.lat,
    lng: defaultLocation.lon,
  };
  return (
    <div style={{ height: mapHeight, width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAipoxlXk8_85HExypanHxveUd26oFozdQ" }}
        // bootstrapURLKeys={{ key: process.env.GOOGLEMAPS }}
        defaultCenter={eventPin}
        defaultZoom={zoomLevel}
      >
        {locations
          ? locations.map((event) => (
              <LocationPin lat={event.lat} lng={event.lon} name={event.name} />
            ))
          : null}
        {showPin ? (
          <LocationPin lat={defaultLocation.lat} lng={defaultLocation.lon} />
        ) : null}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
