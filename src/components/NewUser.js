import React, { useState } from "react";
import Nav from "./Nav";
import "../output.css";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-yellow h-screen w-full">
      <Nav />
      <div>
        {/* <h3 className="text-lg text-center mb-6 lg:mb-12 lg:text-2xl">About</h3> */}
        <div className="ml-7 mr-5 lg:container lg:mx-auto">
          <p>Please register or log in to continue.</p>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
