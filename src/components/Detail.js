import React from "react";
import { useParams } from "react-router-dom";
import "../output.css";
import CarouselComp from "./Carousel";
import Map from "./Map";
import { FaBed } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { FaSnowflake } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { getEvent } from "../sampleData";

const Detail = (props) => {
  let params = useParams();

  let event = getEvent(parseInt(params.eventId, 10));
  let startDate = new Date(event.date.start);
  let endDate = new Date(event.date.end);
  let formattedStart = startDate.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  let formattedEnd = endDate.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-yellow h-full">
      <CarouselComp images={event.images} />
      <div>
        <div className="mb-2 bg-darkblue">
          <div className="mx-5 py-3  text-white">
            <h2 className="text-2xl">{event.name}</h2>
            <p>
              {event.location.city}, {event.location.country}
            </p>
            <p>
              {formattedStart} - {formattedEnd}
            </p>
          </div>
        </div>
        <div className="mx-5">
          <div className="border-b border-orange py-2">
            <p>
              <FaMoneyBill className="inline text-darkblue" />
              &nbsp; {event.cost.amount} {event.cost.currency} per person per
              day
            </p>
            <p className="italic">
              <FaBed className="inline text-darkblue" />
              &nbsp; Accommodation {event.accomIncluded ? "" : "NOT"} included
              in price.
            </p>
          </div>
          <div className="border-b border-orange py-2">
            <p>
              <FaChild className="inline text-darkblue" />
              &nbsp; For ages {event.age.min} - {event.age.max} years.
            </p>
          </div>
          <div className="border-b border-orange py-2">
            <p>{event.description}</p>
          </div>
          <div className="border-b border-orange py-2">
            <h4 className="mb-2">
              <FaInfoCircle className="inline text-darkblue" />
              &nbsp; Other information
            </h4>
            <div className="mx-2">
              {event.excursions ? (
                //? possibly an unordered list array
                <div>
                  <p>
                    <FaWalking className="inline text-darkblue" />
                    &nbsp; Excursions:&nbsp;
                  </p>
                  <p>
                    <i>{event.excursions}</i>
                  </p>
                </div>
              ) : null}
              <p className="mt-3">
                <FaSnowflake className="inline text-darkblue" />
                &nbsp; Average temperatures for the period:&nbsp;
              </p>
              <p>
                <i>
                  {event.temperature.min} - {event.temperature.max}&#176;C.
                </i>
              </p>
            </div>
          </div>
          <div className="border-b border-orange mb-2 py-2">
            <h4 className="mb-2">
              <FaAddressCard className="inline text-darkblue" />
              &nbsp; Contact
            </h4>
            <div className="mx-2">
              <p>{event.contact.name}</p>
              <p>
                <FaEnvelope className="inline text-darkblue" />
                &nbsp;&nbsp;{event.contact.email}
              </p>
              <p>
                <FaGlobe className="inline text-darkblue" />
                &nbsp;&nbsp;
                <a href={event.website}>{event.website}</a>
              </p>
            </div>
          </div>
          <div className="border-b border-orange mb-2 py-2">
            <Map
              defaultLocation={event.location}
              zoomLevel={13}
              mapHeight={"50vh"}
              showPin={true}
            />
          </div>
          <div className="h-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
