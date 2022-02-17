import React, { useEffect, useState } from "react";
import Map from "./Map";
import Nav from "./Nav";
import { getSampleData } from "../sampleData";

const EventsMap = () => {
  const [eventData, setEventData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // let sampleData = getSampleData();

  useEffect(() => {
    try {
      const loadEvents = async () => {
        let data = await fetch("http://127.0.0.1:4000/events", {
          mode: "cors",
        });
        let jsonData = await data.json();
        console.log(jsonData);
        setEventData(jsonData);
        setIsLoading(false);
      };

      loadEvents();
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  }, []);

  if (isLoading) {
    return <div>LOADING...</div>;
  } else {
    let eventLocations = eventData.map((event) => {
      return {
        name: event.name,
        id: event._id,
        lat: event.location.lat,
        lon: event.location.lon,
      };
    });
    let defaultLocation = {
      address: "",
      lat: 47.116,
      lon: -101.3,
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
  }
};

export default EventsMap;
