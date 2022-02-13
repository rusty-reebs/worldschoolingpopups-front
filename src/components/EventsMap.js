import React from "react";
import Map from "./Map";
import Nav from "./Nav";
import { getSampleData } from "../sampleData";

const EventsMap = () => {
  let sampleData = getSampleData();
  let eventLocations = sampleData.map((event) => {
    return {
      name: event.name,
      id: event._id,
      lat: event.location.lat,
      lon: event.location.lon,
    };
  });
  let defaultLocation = {
    address: "",
    lat: 43.196006,
    lon: 33.400974,
  };
  return (
    <div className="bg-yellow h-full">
      <Nav />
      <div className="mx-3">
        <h3 className="text-base text-center mb-4">Events - All</h3>
        <div className="h-screen border border-orange">
          <Map
            locations={eventLocations}
            defaultLocation={defaultLocation}
            zoomLevel={1}
            mapHeight={"100%"}
            showPin={false}
          />
        </div>
        <div className="h-4"></div>
      </div>
    </div>
  );
};

export default EventsMap;
