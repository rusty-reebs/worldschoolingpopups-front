import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../output.css";
import CarouselComp from "./Carousel";
import Map from "./Map";
import { FaCalendar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { FaSnowflake } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { getEvent } from "../sampleData";

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
    // return <div>LOADING...</div>;
    return (
      <div className="bg-yellow flex h-screen w-full align-middle">
        <div className="flex justify-center flex-col mx-auto">
          <div className="flex items-center justify-center space-x-2 animate-pulse">
            <div className="w-8 h-8 bg-orange rounded-full"></div>
            <div className="w-8 h-8 bg-orange rounded-full"></div>
            <div className="w-8 h-8 bg-orange rounded-full"></div>
          </div>
          <div className="text-center text-sm text-black mt-4">Loading...</div>
        </div>
      </div>
    );
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
                <FaMapMarkerAlt className="inline text-white" />
                &nbsp;&nbsp;
                {eventData.location.city}, {eventData.location.country}
              </p>
              <p>
                <FaCalendar className="inline text-white" />
                &nbsp;&nbsp;
                {eventData.date.eventType
                  ? formattedStart + " - " + formattedEnd
                  : "Open-ended / Continuous"}
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
              <p className="font-bold italic">
                <FaBed className="inline text-darkblue" />
                &nbsp; Accommodation {eventData.accomIncluded ? "" : "NOT"}{" "}
                included in price.
              </p>
            </div>
            <div className="border-b border-orange py-2">
              <p className="font-bold">
                <FaChild className="inline text-darkblue" />
                &nbsp; For ages {eventData.age.min} - {eventData.age.max} years.
              </p>
            </div>
            <div className="border-b border-orange py-2">
              <p className="text-sm">{eventData.description}</p>
            </div>
            <div className="border-b border-orange py-2">
              <h4 className="mb-2 font-bold">
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
                <p className="mt-3 text-sm font-bold">
                  <FaSnowflake className="inline text-darkblue" />
                  &nbsp; Average temperatures for the period:&nbsp;
                </p>
                <p className="text-sm">
                  {eventData.temperature.low} - {eventData.temperature.high}
                  &#176;C.
                </p>
              </div>
            </div>
            <div className="border-b border-orange mb-2 py-2">
              <h4 className="mb-2 font-bold">
                <FaAddressCard className="inline text-darkblue" />
                &nbsp; Contact
              </h4>
              <div className="mx-2">
                <p className="text-sm mb-2">{eventData.contact.name}</p>
                <p className="text-sm">
                  <FaEnvelope className="inline text-darkblue" />
                  &nbsp;&nbsp;
                  <a href="mailto:{eventData.contact.email}">
                    {eventData.contact.email}
                  </a>
                </p>
                {eventData.contact.fbPage ? (
                  <p>
                    <FaFacebook className="inline text-darkblue" />
                    &nbsp;&nbsp;
                    <a href={eventData.contact.fbPage} className="text-xs">
                      {eventData.contact.fbPage}
                    </a>
                  </p>
                ) : null}
                {eventData.contact.website ? (
                  <p>
                    <FaGlobe className="inline text-darkblue" />
                    &nbsp;&nbsp;
                    <a href={eventData.contact.website} className="text-xs">
                      {eventData.contact.website}
                    </a>
                  </p>
                ) : null}
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
