import React from "react";
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
          <a href="/">
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
          <a
            href="/"
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
          >
            Home
          </a>
          <a
            href="/join"
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
          >
            <i className="fas fa-star text-yellow"></i>&nbsp;&nbsp;List Your
            Event
          </a>
          <a
            href="/admin"
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
          >
            Become an Admin
          </a>
          <a
            href="/sign-up"
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
          >
            Sign Up
          </a>
          <a
            href="/log-in"
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
          >
            Log In
          </a>
          <p className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none">
            <i className="fas fa-user-circle"></i>username
          </p>
          <a
            href="/log-out"
            className="block md:inline-block text-lighterblue hover:text-dark4 px-3 py-3 border-b-2 border-dark2 md:border-none"
          >
            Log Out
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
