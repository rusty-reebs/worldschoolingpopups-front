import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "./App";
import Detail from "./components/Detail";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path=":eventId" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
