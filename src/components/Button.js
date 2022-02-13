import React from "react";
import { FaMap } from "react-icons/fa";
import "../output.css";

const Button = (props) => {
  return (
    <button className="bg-darkblue text-white py-1 px-3 border rounded-lg">
      <FaMap className="inline" />
      &nbsp;&nbsp;{props.name}
    </button>
  );
};

export default Button;
