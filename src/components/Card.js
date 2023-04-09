import React from "react";
import "../output.css";
import { transformImages } from "./Cloudinary";

const Card = ({ images, title, country, dateStart, dateEnd, eventType }) => {
  let coverImage = [images[0]];
  let transformedImage = transformImages(coverImage);
  let newUrl = transformedImage.toURL();
  let today = new Date();
  let startDate = new Date(dateStart);
  startDate.setMinutes(startDate.getMinutes() + startDate.getTimezoneOffset());
  let formattedDate = startDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
  });
  let endDate = new Date(dateEnd);
  endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset());

  return (
    <div className="">
      <div className="relative">
        <img
          src={newUrl}
          className="block rounded-md aspect-4/3 mb-3 w-full"
          alt="eventimage"
        />
        {today > endDate && dateStart != null ? (
          <div className="bg-red absolute font-bold top-0 right-0 text-white text-sm m-3 p-3 rounded-md">
            COMPLETED
          </div>
        ) : null}
      </div>
      <h4 className="text-lg">{title}</h4>
      <div className="flex justify-between">
        <h5 className="text-sm italic">{country}</h5>
        {eventType === "Fixed Session" ? (
          <h5 className="text-sm italic">
            {dateStart ? formattedDate : "Date TBA"}
          </h5>
        ) : (
          <h5 className="text-sm italic">{eventType}</h5>
        )}
      </div>
    </div>
  );
};

export default Card;
