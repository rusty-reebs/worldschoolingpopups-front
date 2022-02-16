import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./output.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Button from "./components/Button";
import { getSampleData } from "./sampleData";

const App = () => {
  // let sampleData = getSampleData();
  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    try {
      const loadEvents = async () => {
        let data = await fetch("http://127.0.0.1:4000/events", {
          mode: "cors",
        });
        let jsonData = await data.json();
        setSampleData(jsonData);
        console.log(jsonData);
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
      <div className="flex justify-evenly items-center">
        <h3 className="text-base">Events - All</h3>
        <Link to="map">
          <Button name="Map" mapIcon="true" />
        </Link>
      </div>
      {sampleData.map((event) => {
        return (
          <div key={event._id} className="mx-5 mb-4 flex flex-col">
            <Link to={`${event._id}`} key={event._id}>
              <Card
                key={event._id}
                images={event.images}
                title={event.name}
                country={event.location.country}
                dateStart={event.date.start}
                dateEnd={event.date.end}
              />
            </Link>
            <Outlet />
          </div>
        );
      })}
      <div className="h-4"></div>
    </div>
  );
};

export default App;
