import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import App from "./App";
import Detail from "./components/Detail";
import EventsMap from "./components/EventsMap";
import About from "./components/About";
import NotFound from "./components/404";
import Login from "./components/admin/Login";
import Admin from "./components/admin/Admin";
import UpdateEvent from "./components/admin/UpdateEvent";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="events" />} />
        <Route path="events" element={<App />} />
        <Route path="events/:eventId" element={<Detail />} />
        <Route path="events/map" element={<EventsMap />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/events/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:eventId" element={<UpdateEvent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
