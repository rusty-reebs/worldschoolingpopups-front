import React from "react";
import "../output.css";
import { transformImages } from "./Cloudinary";

const Card = ({ images, title, country, dateStart, eventType }) => {
  let coverImage = [images[0]];
  let transformedImage = transformImages(coverImage);
  let newUrl = transformedImage.toURL();
  let startDate = new Date(dateStart);
  let today = new Date();
  let formattedDate = startDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="border-none rounded-md lg:max-h-72">
      <div className="relative">
        <img
          src={newUrl}
          className="block rounded-md aspect-4/3 mb-3 lg:max-h-auto"
          alt="eventimage"
        />
        {today > startDate && dateStart != null ? (
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
