import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../output.css";

const LocationPin = (props) => {
  return (
    <div>
      {props.noRedirect ? (
        <div className="text-darkblue">
          <FaMapMarkerAlt className="inline text-2xl" />
        </div>
      ) : (
        <Link to={"/events/" + props.id}>
          <div className="flex flex-row text-darkblue w-fit whitespace-nowrap">
            <FaMapMarkerAlt className="inline text-2xl" />
            <p className="bg-orange block my-auto text-md px-2 py-1 rounded-md">
              {props.name}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default LocationPin;
