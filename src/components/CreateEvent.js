import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import Input from "./Input";
import Button from "./Button";
import "../output.css";

const CreateEvent = (props) => {
  const [newEventName, setNewEventName] = useState("");
  const [errorsArray, setErrorsArray] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let rawResponse = await fetch("http://127.0.0.1:4000/tests", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventName: newEventName }),
      });
      console.log(rawResponse);
      // let textJson = await rawResponse.text();
      // console.log(textJson);
      let errorsArray = await rawResponse.json();
      console.log(errorsArray);
      setErrorsArray(errorsArray);

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
        <form onSubmit={handleSubmit}>
          <Input
            name="eventName"
            placeholder=""
            label="Event Name"
            type="text"
            value={newEventName}
            onChange={(e) => setNewEventName(e.target.value)}
          />
          {errorsArray
            ? errorsArray.map((error, index) => {
                return <p key={index}>{error.msg}</p>;
              })
            : null}
          {/* <Input name="country" placeholder="" label="Country" type="text" />
          <Input name="state" placeholder="" label="State" type="text" />
          <Input name="city" placeholder="" label="City" type="text" />
          <Input name="lat" placeholder="" label="Latitude" type="text" />
          <Input name="lon" placeholder="" label="Longitude" type="text" />
          <Input
            name="dateStart"
            placeholder=""
            label="Start Date"
            type="text"
          />
          <Input name="dateEnd" placeholder="" label="End Date" type="text" />
          <Input
            name="accomIncluded"
            placeholder=""
            label="Accommodation Included"
            type="type"
          />
          <Input name="ageMin" placeholder="" label="Minimum Age" type="text" />
          <Input name="ageMax" placeholder="" label="Maximum Age" type="text" /> */}

          <Button name="Submit"></Button>

          {/* <label htmlFor="eventName">Event Name</label>
          <input type="text" name="eventName" />
          <label htmlFor="country">Country</label>
          <input type="text" name="country" />
          <label htmlFor="state">State</label>
          <input type="text" name="state" />
          <label htmlFor="city">City</label>
          <input type="text" name="city" />
          <label htmlFor="lat">Latitude</label>
          <input type="text" name="lat" />
          <label htmlFor="lon">Longitude</label>
          <input type="text" name="lon" />
          <label htmlFor="dateStart">Start Date</label>
          <input type="text" name="dateStart" />
          <label htmlFor="dateEnd">End Date</label>
          <input type="text" name="dateEnd" />
          <label htmlFor="accomIncluded">Accomodation Included</label>
          <input type="text" name="accomIncluded" />
          <label htmlFor="ageMin">Minimum Age</label>
          <input type="text" name="ageMin" />
          <label htmlFor="ageMax">Maximum Age</label>
          <input type="text" name="ageMax" />
          <label htmlFor="tempMax">Average High Temperature</label>
          <input type="text" name="tempMax" />
          <label htmlFor="tempMin">Average Low Temperature</label>
          <input type="text" name="tempMin" />
          <label htmlFor="excursions">Excursions</label>
          <textarea name="eventName" />
          <label htmlFor="description">Description</label>
          <textarea name="description" />
          <label htmlFor="contactName">Contact Name</label>
          <input type="text" name="contactName" />
          <label htmlFor="contactEmail">Contact Email</label>
          <input type="email" name="contactEmail" />
          <label htmlFor="contactWebsite">Website</label>
          <input type="text" name="contactWebsite" />
          <label htmlFor="contactFb">Facebook Page</label>
          <input type="text" name="contactFb" />
          <button type="submit">Submit</button> */}
        </form>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default CreateEvent;
