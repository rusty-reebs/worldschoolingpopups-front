import React from "react";
import "./output.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
import sampleData from "./sampleData";

const App = () => {
  return (
    <div className="bg-yellow font-merriweather">
      <Nav />
      <h3 className="text-base text-center">Events - All</h3>
      {sampleData.map((record) => {
        return (
          <div className="mx-5 mb-4 flex flex-col">
            <Card
              key={record._id}
              images={record.images}
              title={record.name}
              country={record.location.country}
              dateStart={record.date.start}
              dateEnd={record.date.end}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
