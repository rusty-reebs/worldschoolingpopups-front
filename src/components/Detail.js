import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
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

//! needs to fetch data, don't rely on state
const Detail = (props) => {
  const [eventData, setEventData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let params = useParams();
  let eventId = params.eventId.toString();
  // if params.eventId not true then use url string

  useEffect(() => {
    try {
      const loadEvent = async () => {
        let data = await fetch("http://127.0.0.1:4000/events/" + eventId, {
          mode: "cors",
        });
        let jsonData = await data.json();
        console.log(jsonData);
        setEventData(jsonData);
        setIsLoading(false);
      };

      loadEvent();
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  }, []);

  if (isLoading) {
    return <div>LOADING...</div>;
  } else {
    let startDate = new Date(eventData.date.start);
    let endDate = new Date(eventData.date.end);
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
        <CarouselComp images={eventData.images} />
        <div>
          <div className="mb-2 bg-darkblue">
            <div className="mx-5 py-3  text-white">
              <h2 className="text-2xl">{eventData.name}</h2>
              <p>
                {eventData.location.city}, {eventData.location.country}
              </p>
              <p>
                {formattedStart} - {formattedEnd}
              </p>
            </div>
          </div>
          <div className="mx-5">
            <div className="border-b border-orange py-2">
              {/* <p>
                <FaMoneyBill className="inline text-darkblue" />
                &nbsp; {eventData.cost.amount} {eventData.cost.currency} per person per
                day
              </p> */}
              <p className="italic">
                <FaBed className="inline text-darkblue" />
                &nbsp; Accommodation {eventData.accomIncluded ? "" : "NOT"}{" "}
                included in price.
              </p>
            </div>
            <div className="border-b border-orange py-2">
              <p>
                <FaChild className="inline text-darkblue" />
                &nbsp; For ages {eventData.age.min} - {eventData.age.max} years.
              </p>
            </div>
            <div className="border-b border-orange py-2">
              <p>{eventData.description}</p>
            </div>
            <div className="border-b border-orange py-2">
              <h4 className="mb-2">
                <FaInfoCircle className="inline text-darkblue" />
                &nbsp; Other information
              </h4>
              <div className="mx-2">
                {eventData.excursions ? (
                  //? possibly an unordered list array
                  <div>
                    <p>
                      <FaWalking className="inline text-darkblue" />
                      &nbsp; Excursions:&nbsp;
                    </p>
                    <p>
                      <i>{eventData.excursions}</i>
                    </p>
                  </div>
                ) : null}
                <p className="mt-3">
                  <FaSnowflake className="inline text-darkblue" />
                  &nbsp; Average temperatures for the period:&nbsp;
                </p>
                <p>
                  <i>
                    {eventData.temperature.low} - {eventData.temperature.high}
                    &#176;C.
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
                <p>{eventData.contact.name}</p>
                <p>
                  <FaEnvelope className="inline text-darkblue" />
                  &nbsp;&nbsp;{eventData.contact.email}
                </p>
                <p>
                  <FaGlobe className="inline text-darkblue" />
                  &nbsp;&nbsp;
                  <a href={eventData.website}>{eventData.website}</a>
                </p>
              </div>
            </div>
            <div className="border-b border-orange mb-2 py-2">
              <Map
                defaultLocation={eventData.location}
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
  }
};

export default Detail;
