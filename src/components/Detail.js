import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../output.css";
import CarouselComp from "./Carousel";
import Nav from "./Nav";
import Map from "./Map";
import { myApi } from "../App";
import { transformImages } from "./Cloudinary";
import { FaCalendar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Detail = (props) => {
  const [eventData, setEventData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let params = useParams();
  let eventId = params.eventId.toString();

  const today = new Date();

  useEffect(() => {
    try {
      const loadEvent = async () => {
        let data = await fetch(myApi + "/events/" + eventId, {
          method: "GET",
          // mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        let refinedData = await data.json();
        setEventData(refinedData);
        setIsLoading(false);
      };

      loadEvent();
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  }, [eventId]);

  if (isLoading) {
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
    let transformedImages = transformImages(eventData.images);
    let newImageUrls = [];
    if (transformedImages.length > 1) {
      newImageUrls = transformedImages.map((image) => {
        return image.toURL();
      });
    } else {
      newImageUrls = [transformedImages.toURL()];
    }
    let startDate = new Date(eventData.date.start);
    let endDate = new Date(eventData.date.end);
    startDate.setMinutes(
      startDate.getMinutes() + startDate.getTimezoneOffset()
    );
    endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset());
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
      <div className="bg-yellow min-h-screen w-full">
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="lg:hidden">
          <CarouselComp images={eventData.images} />
        </div>

        <div className="hidden lg:flex lg:w-4/5 lg:mx-auto lg:justify-start lg:gap-x-5">
          {newImageUrls.map((image, index) => {
            return (
              <div key={index} className="lg:h-72 lg:mb-6">
                <img
                  src={image}
                  className="block rounded-md h-full"
                  alt={"eventimage" + index}
                />
              </div>
            );
          })}
        </div>
        <div className="lg:w-4/5 lg:mx-auto">
          <div className="mb-2 bg-darkblue lg:rounded-md">
            <div className="mx-5 py-3  text-white">
              <div className="flex lg:flex-row lg:gap-x-2">
                <h2 className="text-2xl">{eventData.name}</h2>
                {today > new Date(eventData.date.end) &&
                  eventData.date.end !== null && (
                    <div className="flex bg-red absolute font-bold top-3 right-0 text-white text-sm m-3 p-3 rounded-md lg:relative lg:top-0 lg:p-0 lg:m-0 lg:place-items-center">
                      <p className="lg:mx-2">COMPLETED</p>
                    </div>
                  )}
              </div>
              <p>
                <FaMapMarkerAlt className="inline text-white" />
                &nbsp;&nbsp;
                {eventData.location.city}, {eventData.location.country}
              </p>
              <p>
                <FaCalendar className="inline text-white" />
                &nbsp;&nbsp;
                {eventData.date.eventType === "Fixed Session" &&
                eventData.date.start
                  ? formattedStart + " - " + formattedEnd
                  : eventData.date.eventType}
                {eventData.date.eventType === "Open / Continuous" ? (
                  <span> Dates</span>
                ) : null}
              </p>
            </div>
          </div>
          <div className="mx-5">
            <div className="lg:flex lg:flex-row lg:justify-between lg:gap-3">
              <div className="lg:basis-3/5 lg:order-1">
                {eventData.age.min && eventData.age.max ? (
                  <div className="border-b border-orange py-2">
                    <p className="font-bold">
                      <FaChild className="inline text-darkblue" />
                      &nbsp; For ages {eventData.age.min} - {eventData.age.max}{" "}
                      years.
                    </p>
                  </div>
                ) : null}
                <div className="border-b border-orange py-2">
                  <p className="text-base whitespace-pre-line">
                    {eventData.description}
                  </p>
                </div>
                <div className="border-b border-orange mb-2 py-2">
                  <h4 className="mb-2 font-bold">
                    <FaAddressCard className="inline text-darkblue" />
                    &nbsp; Contact
                  </h4>
                  <div className="mx-2">
                    {eventData.contact.email ? (
                      <p className="text-sm lg:text-base">
                        <FaEnvelope className="inline text-darkblue" />
                        &nbsp;&nbsp;
                        <a
                          href={"mailto:" + eventData.contact.email}
                          className="hover:underline"
                        >
                          {eventData.contact.email}
                        </a>
                      </p>
                    ) : null}
                    {eventData.contact.fbPage ? (
                      <p className="break-words">
                        <FaFacebook className="inline text-darkblue" />
                        &nbsp;&nbsp;
                        <a
                          href={`https://${eventData.contact.fbPage}`}
                          className="hover:underline text-xs lg:text-base"
                        >
                          {eventData.contact.fbPage}
                        </a>
                      </p>
                    ) : null}
                    {eventData.contact.website ? (
                      <p>
                        <FaGlobe className="inline text-darkblue" />
                        &nbsp;&nbsp;
                        <a
                          href={`https://${eventData.contact.website}`}
                          // target="_blank"
                          className="hover:underline text-sm lg:text-base"
                        >
                          {eventData.contact.website}
                        </a>
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="lg:order-2 lg:w-5/12">
                <div className="border-b border-orange mb-2 py-2 lg:border-none lg:mb-0">
                  <Map
                    defaultLocation={eventData.location}
                    zoomLevel={13}
                    mapHeight={"40vh"}
                    showPin={true}
                  />
                </div>
                <p className="text-right text-xs italic">
                  * Location may not be exact.
                </p>
              </div>
            </div>
            <div className="h-4 lg:h-10"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default Detail;
