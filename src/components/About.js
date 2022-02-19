import React from "react";
import Nav from "./Nav";
import "../output.css";

const About = () => {
  return (
    <div className="bg-yellow h-screen w-full">
      <Nav />
      <div>
        <h3 className="text-lg text-center mb-6 md:mb-12 md:text-2xl">About</h3>
        <div className="ml-7 mr-5 md:container md:mx-auto">
          <ul className="list-disc list-outside text-sm md:text-lg">
            <li className="mb-6">
              This site is a free listing for all worldschooling popups and
              events. It is meant to be a directory and a resource. If you need
              information about an event, please contact the event host via
              email, Facebook, or their website.
            </li>
            <li className="italic mb-6">
              We are not affiliated with any of the events listed.
            </li>
            {/* <li className="mb-3">It receives over 100 visitors per week.</li> */}
            {/* <li className="mb-5">
            If you have an event to list, you can{" "}
            <Link
              to="/signup"
              className="underline decoration-orange decoration-2"
            >
              sign up here
            </Link>
            .
          </li> */}
            <li className="mb-6">
              Coming soon -- add and manage your own events!
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
    </div>
  );
};

export default About;
