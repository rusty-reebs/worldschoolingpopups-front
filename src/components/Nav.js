import React from "react";
import { Link } from "react-router-dom";
import "../output.css";
import { useEffect } from "react";

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
      <nav className="flex flex-wrap items-center justify-between mb-5 p-5 md:w-3/4 md:mx-auto bg-darkblue">
        <h1 className="text-white text-lg">
          <a href="/events">
            <img
              src={logo.default}
              style={{ display: "inline", height: 30 }}
              alt="logo"
            />
          </a>
          &nbsp;worldschoolingpopups.com
        </h1>
        <div className="flex md:hidden text-dark3">
          <button id="hamburger">
            <p className="toggle block text-2xl">
              <i className="fas fa-bars"></i>
            </p>
            <p className="toggle hidden text-2xl">
              <i className="fas fa-window-close"></i>
            </p>
          </button>
        </div>
        <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-dark2 md:border-none">
          <Link
            to="/events"
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
          >
            About
          </Link>
          <Link
            to="/events/map"
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
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
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
          >
            <i className="fas fa-star text-yellow"></i>&nbsp;&nbsp;Coming Soon -
            List Your Event
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
