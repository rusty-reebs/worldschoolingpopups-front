import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import App from "./App";
import Detail from "./components/Detail";
import EventsMap from "./components/EventsMap";
import About from "./components/About";
import NotFound from "./components/404";

const AuthContext = React.createContext(null);
const RouteSwitch = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <AuthContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Navigate to="events" />} />
          <Route
            path="events"
            element={<App user={user} setUser={setUser} />}
          />
          <Route path="events/:eventId" element={<Detail />} />
          <Route path="events/map" element={<EventsMap />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/events/*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
export { AuthContext };
