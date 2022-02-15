import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Nav from "./Nav";
import Input, { SelectInput, CountryInput, TextAreaInput } from "./Input";
import Button from "./Button";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import "../output.css";

const CreateEvent = (props) => {
  const [newEventName, setNewEventName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [accomIncluded, setAccomIncluded] = useState(true);
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");
  const [tempHigh, setTempHigh] = useState("");
  const [tempLow, setTempLow] = useState("");
  const [description, setDescription] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactWebsite, setContactWebsite] = useState("");
  const [contactFbPage, setContactFbPage] = useState("");
  const [errorsArray, setErrorsArray] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(accomIncluded);
    setErrorsArray("");
    e.preventDefault();
    try {
      let rawResponse = await fetch("http://127.0.0.1:4000/events", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventName: newEventName,
          country: country,
          city: city,
          dateStart: dateStart,
          dateEnd: dateEnd,
          accomIncluded: accomIncluded,
          ageMin: ageMin,
          ageMax: ageMax,
          tempHigh: tempHigh,
          tempLow: tempLow,
          description: description,
          contactName: contactName,
          contactEmail: contactEmail,
          contactFbPage: contactFbPage,
          contactWebsite: contactWebsite,
        }),
      });
      console.log("raw", rawResponse);
      let responseJson = await rawResponse.json();
      console.log(responseJson);
      if ("errors" in responseJson) {
        setErrorsArray(responseJson.errors);
      } else {
        setErrorsArray(false);
        setSuccess(true);
        setTimeout(() => {
          return navigate("/events");
        }, 1000);
      }

      //! not receiving a JSON response to use code below. Receiving type "cors" ????
      //   let responseJson = await rawResponse.json();
      //   let parsed = responseJson.parse();
      //   console.log(responseJson);
      //   if (responseJson.status === 200) {
      //     // setNewEvent("");
      //     // setMessage("Event created successfully.");
      //     console.log("SUCCESS!");
      //   } else {
      //     // setMessage("An error occurred.");
      //     console.log("OH NO");
      //   }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-yellow h-full">
      <Nav />
      <div className="mx-3">
        <h3 className="text-base text-center mb-4">Create New Event</h3>
        <p className="text-xs italic font-light text-red mb-2">* required</p>
        <form onSubmit={handleSubmit}>
          <Input
            name="eventName"
            placeholder=""
            label="Event Name"
            type="text"
            required="true"
            value={newEventName}
            onChange={(e) => setNewEventName(e.target.value)}
          />
          <CountryInput
            name="country"
            label="Country"
            required="true"
            value={country}
            onChange={(value) => setCountry(value)}
          />
          <Input
            name="city"
            placeholder=""
            label="City"
            type="text"
            required="true"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            name="dateStart"
            placeholder=""
            label="Start Date"
            type="date"
            required="true"
            value={dateStart}
            onChange={(e) => setDateStart(e.target.value)}
          />
          <Input
            name="dateEnd"
            placeholder=""
            label="End Date"
            type="date"
            required="true"
            value={dateEnd}
            onChange={(e) => setDateEnd(e.target.value)}
          />
          <SelectInput
            name="accomIncluded"
            placeholder=""
            label="Accommodation Included"
            required="true"
            value={accomIncluded}
            onChange={(e) => setAccomIncluded(e.target.value)}
          />
          <div className="flex gap-x-2">
            <Input
              name="ageMin"
              placeholder=""
              label="Minimum Age"
              type="number"
              required="true"
              value={ageMin}
              onChange={(e) => setAgeMin(e.target.value)}
            />
            <Input
              name="ageMax"
              placeholder=""
              label="Maximum Age"
              type="number"
              required="true"
              value={ageMax}
              onChange={(e) => setAgeMax(e.target.value)}
            />
          </div>
          <div className="flex gap-x-2">
            <Input
              name="tempHigh"
              placeholder=""
              label="Average High&nbsp;&#176;C"
              type="number"
              required="true"
              value={tempHigh}
              onChange={(e) => setTempHigh(e.target.value)}
            />
            <Input
              name="tempLow"
              placeholder=""
              label="Average Low&nbsp;&#176;C"
              type="number"
              required="true"
              value={tempLow}
              onChange={(e) => setTempLow(e.target.value)}
            />
          </div>
          <TextAreaInput
            name="description"
            placeholder=""
            label="Event Description"
            required="true"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            name="contactName"
            placeholder=""
            label="Contact Name"
            type="text"
            required="true"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
          <Input
            name="contactEmail"
            placeholder=""
            label="Contact Email"
            type="email"
            required="true"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
          <Input
            name="contactFbPage"
            placeholder=""
            label="Facebook Page"
            type="text"
            value={contactFbPage}
            onChange={(e) => setContactFbPage(e.target.value)}
          />
          <Input
            name="contactWebsite"
            placeholder=""
            label="Website"
            type="text"
            value={contactWebsite}
            onChange={(e) => setContactWebsite(e.target.value)}
          />
          {errorsArray
            ? errorsArray.map((error, index) => {
                return (
                  <p key={index} className="text-sm text-red font-bold">
                    {error.msg}
                  </p>
                );
              })
            : null}
          {success ? (
            <p className="text-center">
              <FaCheckCircle
                className="inline text-green"
                style={{ verticalAlign: "middle" }}
              />
              &nbsp;Success!
            </p>
          ) : null}
          <div className="flex justify-center mt-5">
            <Button name="Submit"></Button>
          </div>
        </form>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default CreateEvent;
