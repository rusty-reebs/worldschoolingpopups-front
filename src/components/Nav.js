import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../output.css";

const logo = require("../img/globe-favicon.svg");

const Nav = (props) => {
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
        <div className="flex flex-col">
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
          <h3 className="text-white text-sm italic pl-9 -mt-1.5 lg:mt-0">
            <span className="underline decoration-yellow decoration-2 underline-offset-1">
              your go-to resource for events!
            </span>
          </h3>
        </div>
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
        <div className="toggle hidden lg:flex w-full lg:w-auto text-center text-bold mt-5 lg:mt-0 border-t-2 border-lightblue lg:border-none">
          <Link
            to="/events"
            className="block lg:inline-block text-lightblue hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            🏠&nbsp;&nbsp;Home
          </Link>
          <Link
            to="/about"
            className="block lg:inline-block text-lightblue hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            ℹ️&nbsp;&nbsp;About
          </Link>
          <Link
            to="/events/map"
            className="block lg:inline-block text-lightblue hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            🗺&nbsp;&nbsp;Map
          </Link>
          <Link
            // to="/events/search"
            to="#"
            className="block lg:inline-block text-lightblue hover:text-white px-3 py-3 border-b-2 border-lightblue lg:border-none lg:text-lg"
          >
            <p>🔎&nbsp;&nbsp;Search</p>
            <p className="text-xs">
              <i className="fas fa-star text-yellow"></i>&nbsp;Coming
              Soon!&nbsp;<i className="fas fa-star text-yellow"></i>
            </p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
