import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../Button";
import Nav from "../Nav";
import Input, { CountryInput, SessionSelect, TextAreaInput } from "./Input";
import { useParams, useNavigate } from "react-router-dom";
import { myApi } from "../../App";
import { format } from "date-fns";

export default function UpdateEvent() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errorsArray, setErrorsArray] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const eventId = params.eventId.toString();

  useEffect(() => {
    const getEvent = async () => {
      try {
        const data = await fetch(myApi + "/events/" + eventId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (data.ok) {
          const result = await data.json();
          console.log("👉 result", result);
          setForm({
            ...result,
            date: {
              ...result.date,
              start: format(new Date(result?.date?.start), "yyyy-MM-dd"),
              end: format(new Date(result?.date?.end), "yyyy-MM-dd"),
            },
          });
          setIsLoading(false);
        } else navigate("/login");
      } catch (error) {
        console.log(error);
      }
    };
    getEvent();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorsArray("");
    try {
      let res = await fetch(`${myApi}/events/${eventId}/update`, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //   author: user.id,
          name: form?.name,
          country: form?.location?.country,
          isGlobal: form?.location?.isGlobal,
          city: form?.location?.city,
          isMultiple: form?.location?.isMultiple,
          lat: form?.location?.lat,
          lon: form?.location?.lon,
          eventType: form?.date?.eventType,
          start: form.date.start,
          end: form?.date?.end,
          min: form?.age?.min,
          max: form?.age?.max,
          description: form?.description,
          contactEmail: form?.contact?.contactEmail,
          contactFbPage: form?.contact?.contactFbPage,
          contactWebsite: form?.contact?.contactWebsite,
          //   images: images,
        }),
      });
      //! below error handler redirects to catch block and bypasses line 93 onwards
      // if (!res.ok) {
      //   const message = `An error has occurred: ${res.status} - ${res.statusText}`;
      //   throw new Error(message);
      // }

      let responseJson = await res.json();
      console.log("👉 responseJson", responseJson);
      if ("errors" in responseJson) {
        setErrorsArray(responseJson.errors);
      } else {
        setErrorsArray(false);
        setSuccess(true);
        setTimeout(() => {
          return navigate("/admin");
        }, 1000);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="bg-yellow min-h-screen w-full">
      <Nav />
      {isLoading ? (
        <div className="bg-yellow flex h-screen w-full align-middle">
          <div className="flex justify-center flex-col mx-auto">
            <div className="flex items-center justify-center space-x-2 animate-pulse">
              <div className="w-8 h-8 bg-orange rounded-full"></div>
              <div className="w-8 h-8 bg-orange rounded-full"></div>
              <div className="w-8 h-8 bg-orange rounded-full"></div>
            </div>
            <div className="text-center text-sm text-black mt-4">
              Loading...
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mx-3">
            <h3 className="text-base text-center mb-4 lg:text-2xl">
              Update Event
            </h3>
            <div className="lg:w-1/3 lg:mx-auto">
              <p className="text-xs italic font-light text-red mb-2">
                * required
              </p>
              <form onSubmit={handleSubmit}>
                <Input
                  name="eventName"
                  placeholder=""
                  label="Event Name"
                  type="text"
                  required="true"
                  value={form?.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <div className="flex gap-2">
                  <CountryInput
                    name="country"
                    label="Country"
                    disabled={form?.location?.isGlobal}
                    value={form?.location?.country}
                    onChange={(value) =>
                      setForm((prev) => ({
                        ...prev,
                        location: { ...prev.location, country: value },
                      }))
                    }
                  />
                  <div className="flex items-center mx-auto">
                    <label
                      htmlFor="global"
                      className="flex gap-4 text-sm font-light placeholder-black"
                    >
                      Global?
                      <input
                        name="global"
                        type="checkbox"
                        className="scale-150"
                        checked={form?.location?.isGlobal}
                        onChange={(value) =>
                          setForm((prev) => ({
                            ...prev,
                            location: {
                              ...prev.location,
                              isGlobal: !prev?.location?.isGlobal,
                            },
                          }))
                        }
                      />
                    </label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Input
                    name="city"
                    placeholder=""
                    label="City"
                    type="text"
                    disabled={form?.location?.isMultiple}
                    value={form?.location?.city}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        location: { ...prev.location, city: e.target.value },
                      }))
                    }
                  />
                  <div className="flex items-center">
                    <label
                      htmlFor="multiple"
                      className="flex gap-4 text-sm font-light placeholder-black"
                    >
                      Multiple?
                      <input
                        name="multiple"
                        type="checkbox"
                        className="scale-150"
                        checked={form?.location?.isMultiple}
                        onChange={(value) =>
                          setForm((prev) => ({
                            ...prev,
                            location: {
                              ...prev.location,
                              isMultiple: !prev?.location?.isMultiple,
                            },
                          }))
                        }
                      />
                    </label>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <Input
                    name="lat"
                    placeholder="eg. 50.112"
                    label="Latitude"
                    type="number"
                    value={form?.location?.lat}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        location: { ...prev.location, lat: e.target.value },
                      }))
                    }
                  />
                  <Input
                    name="lon"
                    placeholder="eg. -118.203"
                    label="Longitude"
                    type="number"
                    value={form?.location?.lon}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        location: { ...prev.location, lon: e.target.value },
                      }))
                    }
                  />
                </div>
                <SessionSelect
                  name="eventType"
                  placeholder=""
                  label="Event Type"
                  values={[
                    ["Fixed Session", "Fixed Session"],
                    ["Open-ended / Continuous", "Open-ended / Continuous"],
                    ["Full School Year", "Full School Year"],
                  ]}
                  selectedValue={"Fixed Session"}
                  value={form?.date?.eventType}
                  callback={(value) =>
                    setForm((prev) => ({
                      ...prev,
                      date: { ...prev.date, eventType: value },
                    }))
                  }
                />
                <Input
                  name="dateStart"
                  placeholder=""
                  label="Start Date"
                  type="date"
                  value={form?.date?.start}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      date: { ...prev.date, start: e.target.value },
                    }))
                  }
                />
                <Input
                  name="dateEnd"
                  placeholder=""
                  label="End Date"
                  type="date"
                  value={form?.date?.end}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      date: { ...prev.date, end: e.target.value },
                    }))
                  }
                />
                <div className="flex gap-x-2">
                  <Input
                    name="ageMin"
                    placeholder=""
                    label="Minimum Age"
                    type="number"
                    value={form?.age?.min}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        age: { ...prev.age, min: e.target.value },
                      }))
                    }
                  />
                  <Input
                    name="ageMax"
                    placeholder=""
                    label="Maximum Age"
                    type="number"
                    value={form?.age?.max}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        age: { ...prev.age, max: e.target.value },
                      }))
                    }
                  />
                </div>
                <TextAreaInput
                  name="description"
                  placeholder=""
                  label="Event Description"
                  required="true"
                  value={form?.description}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                />
                <Input
                  name="contactEmail"
                  placeholder=""
                  label="Contact Email"
                  type="email"
                  value={form?.contact?.contactEmail}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      contact: {
                        ...prev.contact,
                        contactEmail: e.target.value,
                      },
                    }))
                  }
                />
                <Input
                  name="contactFbPage"
                  placeholder="www.facebook.com/myevent"
                  label="Facebook Page"
                  type="text"
                  value={form?.contact?.contactFbPage}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      contact: {
                        ...prev.contact,
                        contactFbPage: e.target.value,
                      },
                    }))
                  }
                />
                <Input
                  name="contactWebsite"
                  placeholder="www.example.com"
                  label="Website"
                  type="text"
                  value={form?.contact?.contactWebsite}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      contact: {
                        ...prev.contact,
                        contactWebsite: e.target.value,
                      },
                    }))
                  }
                />
                {/* <div className="flex justify-center mb-2">
                  <div>
                    <CloudinaryUploadWidget
                      setCheckmark={setCheckmark}
                      checkmark={checkmark}
                      images={images}
                      setImages={setImages}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-light ml-2">Maximum 3, 1MB each.</p>
                    <p className="text-xs font-light ml-2">
                      First image will be cover image.
                    </p>
                    <div className="flex justify-center">
                      {checkmark
                        ? checkmark.map((check, index) => {
                            return (
                              <p key={index} className="text-center">
                                <FaCheckCircle className="text-green" />
                              </p>
                            );
                          })
                        : null}
                    </div>
                  </div>
                </div> */}
                {errorsArray
                  ? errorsArray.map((error, index) => {
                      return (
                        <p key={index} className="text-sm text-red font-bold">
                          {error.msg}
                        </p>
                      );
                    })
                  : null}
                <div className="flex justify-center mt-5">
                  <Button name="Submit"></Button>
                </div>
                {success ? (
                  <p className="text-center">
                    <FaCheckCircle
                      className="inline text-green"
                      style={{ verticalAlign: "middle" }}
                    />
                    &nbsp;Success!
                  </p>
                ) : null}
              </form>
            </div>
            <div className="h-16"></div>
          </div>
        </>
      )}
    </div>
  );
}
