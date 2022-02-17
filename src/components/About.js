import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import "../output.css";

const About = () => {
  return (
    <div className="bg-yellow h-screen w-full">
      <Nav />
      <div className="mx-3">
        <h3 className="text-base text-center mb-4">About</h3>
        <ul className="list-disc list-outside text-sm">
          <li className="mb-3">
            This site is a free listing of worldschooling popups and events.
          </li>
          <li className="mb-3">It receives over 100 visitors per week.</li>
          <li className="mb-5">
            If you have an event to list, you can{" "}
            <Link
              to="/signup"
              className="underline decoration-orange decoration-2"
            >
              sign up here
            </Link>
            .
          </li>
          <li>
            For questions or suggestions, please email us at
            <a
              href="mailto:worldschoolingpopups@gmail.com"
              className="underline decoration-orange decoration-2"
            >
              &nbsp;worldschoolingpopups@gmail.com
            </a>
            .
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
