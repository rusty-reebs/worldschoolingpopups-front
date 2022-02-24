import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import App from "./App";
import Detail from "./components/Detail";
import EventsMap from "./components/EventsMap";
import CreateEvent from "./components/CreateEvent";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
import Private from "./components/Private";
import Logout from "./components/Logout";
import NewUser from "./components/NewUser";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="events" />} />
        <Route path="events" element={<App />} />
        <Route path="events/:eventId" element={<Detail />} />
        <Route path="events/map" element={<EventsMap />} />
        <Route path="events/create" element={<CreateEvent />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="private" element={<Private />} />
        <Route path="logout" element={<Logout />} />
        <Route path="newuser" element={<NewUser />} />
        {/* <Route
        path="*"
        element={<Navigate to="/" />}
    /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
