import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import "./output.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import { getSampleData } from "./sampleData";

const App = () => {
  let sampleData = getSampleData();

  return (
    <div className="bg-yellow">
      <Nav />
      <h3 className="text-base text-center">Events - All</h3>
      {sampleData.map((event) => {
        return (
          <div className="mx-5 mb-4 flex flex-col">
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
    </div>
  );
};

export default App;
