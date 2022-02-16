import React from "react";

const Card = (props) => {
  let startDate = new Date(props.dateStart);
  let formattedDate = startDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="mt-4 md:w-3/4 md:mx-auto border-none rounded-md">
      <img
        src={props.images[0].url}
        style={{ display: "block", borderRadius: "0.375rem", maxheight: 100 }}
        alt="eventimage"
      />
      <h4>{props.title}</h4>
      <div className="flex justify-between">
        <h5 className="text-sm italic">{props.country}</h5>
        <h5 className="text-sm italic">{formattedDate}</h5>
      </div>
    </div>
  );
};

export default Card;
