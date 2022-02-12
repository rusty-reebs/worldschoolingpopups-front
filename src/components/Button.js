import React from "react";
import { FaMap } from "react-icons/fa";
import "../output.css";

const Button = (props) => {
  return (
    <button className="bg-orange py-1 px-3 border rounded-lg">
      <FaMap className="inline" />
      &nbsp;Map
    </button>
  );
};

export default Button;
