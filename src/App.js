//TODO back button returns to previous position in scroll
//TODO search by region, when clicked, render component between navbar and Events - All.
//TODO search by date type -- Fixed, Continous / Open-Ended, Full School Year
//TODO fix grid on medium screens
//TODO Backup MongoDB

import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./output.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Button from "./components/Button";

// const myApi = process.env.REACT_APP_DEV_API; //! development server
const myApi = process.env.REACT_APP_PROD_API; //! production server

const App = ({ user, setUser }) => {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [records, setRecords] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    try {
      const loadEvents = async () => {
        let data = await fetch(myApi + "/events", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        let refinedData = await data.json();
        console.log(refinedData);
        setRecords(refinedData.records);
        setEventData(refinedData.events);

        // manipulate last updated date
        let lastUpdated = new Date(refinedData.lastUpdated);
        lastUpdated.setMinutes(
          lastUpdated.getMinutes() + lastUpdated.getTimezoneOffset()
        );
        let formattedLastUpdated = lastUpdated.toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
        setLastUpdated(formattedLastUpdated);

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
    <div className="bg-yellow min-h-screen w-full">
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
          <div className="flex flex-col mx-4 lg:flex lg:flex-col lg:justify-center lg:mx-10">
            <div className="text-center mb-4 lg:grid lg:grid-cols-3 lg:justify-items-center 2xl:grid 2xl:grid-cols-5 2xl:justify-items-center">
              <h3 className="text-lg lg:text-2xl lg:col-start-2 2xl:col-start-3">
                Events - All{" "}
                <p className="inline-block text-base">({records})</p>
              </h3>
              <h3 className="italic text-sm lg:mt-auto lg:ml-auto lg:text-base 2xl:col-start-5 2xl:ml-0">
                Last updated: {lastUpdated}
              </h3>
            </div>
            <Link
              to="map"
              className="fixed inset-x-0 bottom-8 z-10 text-center lg:text-lg"
            >
              <Button name="Map" mapIcon="true" />
            </Link>
            <div className="grid grid-cols-1 gap-y-6 mx-auto md:grid md:grid-cols-2 md:auto-rows-max md:gap-x-10 lg:grid lg:grid-cols-3 lg:auto-rows-max lg:gap-x-12 lg:gap-y-16 2xl:grid-cols-4">
              {eventData.map((event) => {
                return (
                  <div key={event._id}>
                    <Link to={`${event._id}`} key={event._id}>
                      <Card
                        key={event._id}
                        images={event.images}
                        title={event.name}
                        country={event.location.country}
                        eventType={event.date.eventType}
                        dateStart={event.date.start}
                        dateEnd={event.date.end}
                      />
                    </Link>
                    <Outlet />
                  </div>
                );
              })}
            </div>
            <div className="h-24 lg:h-40"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
export { myApi };
