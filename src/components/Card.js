import React from "react";
import { transformImages } from "./CloudinaryUploadWidget";

const Card = ({ images, title, country, dateStart, eventType }) => {
  let coverImage = transformImages(images[0]);
  let coverImageUrl = coverImage.toURL();
  let startDate = new Date(dateStart);
  let formattedDate = startDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="mx-5 mb-8 border-none rounded-md md:h-72 md:mb-4">
      <img
        // src={images[0].url}
        src={coverImageUrl}
        style={{ display: "block", borderRadius: "0.375rem", height: "100%" }}
        alt="eventimage"
      />
      <h4 className="text-lg mt-2">{title}</h4>
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
