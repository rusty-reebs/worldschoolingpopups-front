import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../output.css";

const logo = require("../globe-favicon.svg");

const Nav = () => {
  useEffect(() => {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  });
  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between mb-5 p-5 lg:w-full lg:px-9 lg:mb-9 bg-darkblue">
        <h1 className="text-white text-lg lg:text-2xl">
          <a href="/events">
            <img
              src={logo.default}
              style={{ display: "inline", height: 30 }}
              alt="logo"
            />
          </a>
          &nbsp;worldschoolingpopups.com
        </h1>
        <div className="flex lg:hidden text-white">
          <button id="hamburger">
            <p className="toggle block text-2xl">
              <i className="fas fa-bars"></i>
            </p>
            <p className="toggle hidden text-2xl">
              <i className="fas fa-window-close"></i>
            </p>
          </button>
        </div>
        <div className="toggle hidden lg:flex w-full lg:w-auto text-right text-bold mt-5 lg:mt-0 border-t-2 border-lightblue lg:border-none">
          <Link
            to="/events"
            className="block lg:inline-block text-lightblue hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block lg:inline-block text-lightblue hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            About
          </Link>
          <Link
            to="/events/map"
            className="block lg:inline-block text-lightblue hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            Events Map
          </Link>
          {/* <Link
            // to="/events/search"
            to="#"
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
          >
            <i className="fas fa-star text-yellow"></i>&nbsp;&nbsp;Search Events
          </Link> */}
          <Link
            to="/events/create"
            // to="#"
            className="block lg:inline-block text-lightblue hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            <p>List Your Event</p>
            <p className="text-xs text-yellow">
              <i className="fas fa-star text-yellow"></i>&nbsp;&nbsp;Coming
              Soon&nbsp;&nbsp;<i className="fas fa-star text-yellow"></i>
            </p>
          </Link>
          {/* <Link
            to="/sign-up"
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
          >
            Sign Up
          </Link> */}
          {/* <Link
            to="/log-in"
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
          >
            Log In
          </Link> */}
          {/* <p className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none">
            <i className="fas fa-user-circle"></i>username
          </p>
          <Link
            to="/log-out"
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
          >
            Log Out
          </Link> */}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
