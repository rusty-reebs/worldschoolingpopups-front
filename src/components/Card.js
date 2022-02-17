import React from "react";

const Card = ({ images, title, country, dateStart, eventType }) => {
  let startDate = new Date(dateStart);
  let formattedDate = startDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="mt-4 md:w-3/4 md:mx-auto border-none rounded-md">
      <img
        src={images[0].url}
        style={{ display: "block", borderRadius: "0.375rem", maxheight: 100 }}
        alt="eventimage"
      />
      <h4 className="text-lg">{title}</h4>
      <div className="flex justify-between">
        <h5 className="text-sm italic">{country}</h5>
        {eventType ? (
          <h5 className="text-sm italic">{formattedDate}</h5>
        ) : (
          <h5 className="text-sm italic">Open/continuous dates</h5>
        )}
      </div>
    </div>
  );
};

export default Card;
