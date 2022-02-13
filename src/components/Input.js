import React from "react";
import "../output.css";

const Input = ({ name, placeholder = "", label = "", type = "", ...rest }) => {
  return (
    <div className="bg-white border transition duration-150 ease-in-out focus-within:border-orange border-black rounded-md mb-2">
      <label
        htmlFor={name}
        className="text-xs font-light placeholder-black px-2 pt-1.5"
      >
        {label}
      </label>
      <input
        type={type}
        className="bg-white w-full px-2 pb-1.5 text-black outline-none text-base font-light rounded-md"
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
