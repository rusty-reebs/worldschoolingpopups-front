import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "./App";
import Detail from "./components/Detail";
import EventsMap from "./components/EventsMap";
import CreateEvent from "./components/CreateEvent";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="events" element={<App />} />
        <Route path="events/:eventId" element={<Detail />} />
        <Route path="events/map" element={<EventsMap />} />
        <Route path="events/create" element={<CreateEvent />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
