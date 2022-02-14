import React from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import "../output.css";

const Input = ({
  name,
  placeholder = "",
  label = "",
  type,
  required,
  ...rest
}) => {
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

const TextAreaInput = ({ name, label, value, onChange }) => {
  return (
    <div className="bg-white border transition duration-150 ease-in-out focus-within:border-orange border-black rounded-md mb-2">
      <label
        htmlFor={name}
        className="text-xs font-light placeholder-black px-2 pt-1.5"
      >
        {label}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        rows="5"
        className="bg-white text-base font-light w-full focus:outline-none px-2"
      />
    </div>
  );
};

const SelectInput = ({ name, label }) => {
  return (
    <div className="bg-white border transition duration-150 ease-in-out focus-within:border-orange border-black rounded-md mb-2">
      <label
        htmlFor={name}
        className="text-xs font-light placeholder-black px-2 pt-1.5"
      >
        {label}
      </label>
      <select
        id={name}
        className="bg-white focus:outline-none mb-2 text-base font-light placeholder-black w-full px-1"
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div>
  );
};

const CountryInput = ({ name, label, value, onChange }) => {
  return (
    <div className="bg-white border transition duration-150 ease-in-out focus-within:border-orange border-black rounded-md mb-2">
      <label
        htmlFor={name}
        className="text-xs font-light placeholder-black px-2 pt-1.5"
      >
        {label}
      </label>
      <CountryDropdown
        name={name}
        value={value}
        className="bg-white focus:outline-none mb-2 text-base font-light placeholder-black w-full px-1"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
export { CountryInput, SelectInput, TextAreaInput };
