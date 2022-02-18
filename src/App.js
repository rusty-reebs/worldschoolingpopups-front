//TODO photo upload dimensions
//TODO excursions on detail page
//TODO tailwind md screen size

import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./output.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="bg-yellow h-full">
      <Nav />
      {isLoading ? (
        <div className="bg-yellow flex h-screen w-full align-middle">
          <div className="flex justify-center flex-col mx-auto">
            <div className="flex items-center justify-center space-x-2 animate-pulse">
              <div className="w-8 h-8 bg-orange rounded-full"></div>
              <div className="w-8 h-8 bg-orange rounded-full"></div>
              <div className="w-8 h-8 bg-orange rounded-full"></div>
            </div>
            <div className="text-center text-sm text-black mt-4">
              Loading...
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="md:mx-6">
            <h3 className="text-center text-lg md:text-2xl">Events - All</h3>
            <Link to="map" className="fixed inset-x-0 bottom-8 text-center">
              <Button name="Map" mapIcon="true" />
            </Link>
            <div className="md:flex md:flex-row md:h-screen">
              {eventData.map((event) => {
                return (
                  <div
                    key={event._id}
                    className="mx-5 mb-4 flex flex-col md:flex-row"
                  >
                    <Link to={`${event._id}`} key={event._id}>
                      <Card
                        key={event._id}
                        images={event.images}
                        title={event.name}
                        country={event.location.country}
                        eventType={event.date.eventType}
                        dateStart={event.date.start}
                      />
                    </Link>
                    <Outlet />
                  </div>
                );
              })}
            </div>
            <div className="h-4"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
