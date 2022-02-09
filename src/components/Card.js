import React from "react";

const Card = (props) => {
  return (
    <div className="mt-4 md:w-3/4 md:mx-auto border-none rounded-md">
      <img
        src={props.img}
        style={{ display: "block", borderRadius: "0.375rem", maxheight: 100 }}
        alt="hi"
      />
      <h4>{props.title}</h4>
      <h5 className="text-sm">{props.country}</h5>
    </div>
  );
};

export default Card;
