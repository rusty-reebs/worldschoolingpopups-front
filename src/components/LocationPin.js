import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../output.css";

const LocationPin = ({ noRedirect, id, name, isCompleted }) => {
  return (
    <div>
      {noRedirect ? (
        <div className="text-darkblue">
          <FaMapMarkerAlt className="inline text-2xl" />
        </div>
      ) : (
        <Link to={"/events/" + id}>
          <div
            className={`flex flex-row ${
              isCompleted ? "text-red" : "text-darkblue"
            } w-fit whitespace-nowrap`}
          >
            <FaMapMarkerAlt className="inline text-2xl" />
            <p className="bg-orange block my-auto text-black text-md px-2 py-1 rounded-md">
              {name}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default LocationPin;
