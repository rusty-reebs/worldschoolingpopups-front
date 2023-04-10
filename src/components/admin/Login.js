import React, { useState } from "react";
import Nav from "../Nav";
import Input from "./Input";
import Button from "../../components/Button";
import { myApi } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorsArray, setErrorsArray] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setErrorsArray("");
    e.preventDefault();
    try {
      let res = await fetch(myApi + "/login", {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });
      let responseJson = await res.json();
      console.log("👉 responseJson", responseJson);
      //   const result = {
      //     status: res.status + " " + res.statusText,
      //     headers: {
      //       "Content-Type": res.headers.get("Content-Type"),
      //       "Content-Length": res.headers.get("Content-Length"),
      //     },
      //     data: responseJson,
      //   };
      //   console.log(result);
      if ("errors" in responseJson) {
        setErrorsArray(responseJson.errors);
      } else {
        setErrorsArray(false);
        setTimeout(() => {
          return navigate("/admin");
        }, 500);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-yellow h-screen">
      <Nav />
      <div className="mx-3">
        <h3 className="text-base text-center mb-4 lg:text-2xl">
          Sign in to your account
        </h3>
        <div className="lg:w-1/3 lg:mx-auto">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <Input
              name="email"
              placeholder=""
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name="password"
              placeholder=""
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorsArray
              ? errorsArray.map((error, index) => (
                  <p key={index} className="text-sm text-red font-bold mx-auto">
                    {error.msg}
                  </p>
                ))
              : null}
            <div className="flex justify-center mt-5">
              <Button name="Submit"></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
